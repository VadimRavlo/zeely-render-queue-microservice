import { Injectable, Logger } from '@nestjs/common';

import { RenderQueueService } from '../../fundamentals/render-queue/render-queue.service';
import { RenderQueue, RenderQueueStatus } from '@prisma/client';
import { IEstimateDurationResponse } from './types';

@Injectable()
export class RenderQueueHandlerManagerService {
  constructor(private readonly renderQueueService: RenderQueueService) {}

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
    return await this.renderQueueService.updateRenderQueueEntryById(id, {
      ...dto,
      status: RenderQueueStatus.READY,
    });
  }
}
