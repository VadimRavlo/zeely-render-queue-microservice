import { Injectable, Logger } from '@nestjs/common';

import { RenderQueueService } from '../../fundamentals/render-queue/render-queue.service';
import {
  ProviderEntityType,
  ProviderOperationStatus,
  ProviderProcessingStage,
  RenderQueue,
  RenderQueueStatus,
} from '@prisma/client';
import { IEstimateDurationResponse } from './types';
import { ProviderLogsService } from '../../fundamentals/provider-logs/provider-logs.service';

@Injectable()
export class RenderQueueHandlerManagerService {
  constructor(
    private readonly renderQueueService: RenderQueueService,
    private readonly providerLogsService: ProviderLogsService,
  ) {}

  async getList(): Promise<RenderQueue[]> {
    return this.renderQueueService.getRenderQueue();
  }

  async getElementById(id: string): Promise<RenderQueue | null> {
    return this.renderQueueService.getRenderQueuesEntryById(id);
  }

  async estimateReadiness(
    newVideoDurationSeconds: number,
  ): Promise<IEstimateDurationResponse> {
    const avgRenderingTimeSeconds = process.env.AVG_RENDER_TIME_SECONDS
      ? Number.parseInt(process.env.AVG_RENDER_TIME_SECONDS)
      : 60;
    const avgVideoDurationSeconds = process.env.AVG_VIDEO_DURATION_SECONDS
      ? Number.parseInt(process.env.AVG_VIDEO_DURATION_SECONDS)
      : 20;

    Logger.debug(
      `newVideoDurationSeconds ${newVideoDurationSeconds}, avgRenderingTimeSeconds ${avgRenderingTimeSeconds}, avgVideoDurationSeconds ${avgVideoDurationSeconds}`,
    );

    const followingRenderQueueCount =
      await this.renderQueueService.getFollowingRenderQueueCount();

    const expectedDurationOfNewVideoProcessing =
      (avgRenderingTimeSeconds / avgVideoDurationSeconds) *
      newVideoDurationSeconds;
    const expectedExistingQueueProcessingTime =
      avgRenderingTimeSeconds * followingRenderQueueCount +
      expectedDurationOfNewVideoProcessing;

    Logger.debug(
      `expectedDurationOfNewVideoProcessing ${expectedDurationOfNewVideoProcessing}, expectedExistingQueueProcessingTime ${expectedExistingQueueProcessingTime}`,
    );

    return {
      renderEstimation: `${((1 / expectedExistingQueueProcessingTime) * 100).toFixed(4)}%`,
    };
  }

  async getFirstReadyAndWaitingElement(): Promise<RenderQueue | null> {
    return this.renderQueueService.getFirstEntryByStatus([
      RenderQueueStatus.READY,
      RenderQueueStatus.WAITING,
    ]);
  }

  public async createRenderQueueElement(
    dto: RenderQueue,
  ): Promise<RenderQueue> {
    return await this.renderQueueService.createRenderQueueEntry(dto);
  }

  public async proceedRenderQueueElements(
    id: string,
    dto: Partial<RenderQueue>,
  ): Promise<RenderQueue> {
    await this.fakeRender();

    return await this.renderQueueService.updateRenderQueueEntryById(id, {
      ...dto,
      status: RenderQueueStatus.READY,
    });
  }

  private async fakeRender(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    Logger.debug(`Render started at: ${new Date()}`);

    await this.providerLogsService.createLogRecord({
      stage: ProviderProcessingStage.VIDEO_RENDER_START,
      entityType: ProviderEntityType.RENDER_SERVICE,
      status: ProviderOperationStatus.SUCCESS,
      message: 'Processing successfully started',
    });

    let counter = 0;
    try {
      const intervalId = setInterval(() => {
        Logger.debug(`Rendered ${counter}% of current video`);
        if (counter === 100) clearInterval(intervalId);
        counter++;
      }, 100);

      await this.providerLogsService.createLogRecord({
        stage: ProviderProcessingStage.VIDEO_RENDER_END,
        entityType: ProviderEntityType.RENDER_SERVICE,
        status: ProviderOperationStatus.SUCCESS,
        message: 'Processing successfully finished',
      });
    } catch (error) {
      await this.providerLogsService.createLogRecord({
        stage: ProviderProcessingStage.VIDEO_RENDER_END,
        entityType: ProviderEntityType.RENDER_SERVICE,
        status: ProviderOperationStatus.ERROR,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        message: error.message,
      });
    }
  }
}
