import { Injectable } from '@nestjs/common';

import { RenderQueueService } from '../../fundamentals/render-queue/render-queue.service';
import { RenderQueue, RenderQueueStatus } from '@prisma/client';

@Injectable()
export class RenderQueueHandlerManagerService {
  constructor(private readonly renderQueueService: RenderQueueService) {}

  async getList(): Promise<RenderQueue[]> {
    return this.renderQueueService.getRenderQueue();
  }

  async getElementById(id: string): Promise<RenderQueue | null> {
    return this.renderQueueService.getRenderQueuesEntryById(id);
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
