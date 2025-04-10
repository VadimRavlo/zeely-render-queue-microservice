import { Injectable, NotFoundException } from '@nestjs/common';
import { RenderQueueHandlerManagerService } from '../../../managers/render-queue-handler-manager/render-queue-handler-manager.service';
import { RenderQueue } from '@prisma/client';

@Injectable()
export class AdminRenderQueueApiService {
  constructor(
    private readonly renderQueueHandlerManagerService: RenderQueueHandlerManagerService,
  ) {}

  async getList(): Promise<RenderQueue[]> {
    return this.renderQueueHandlerManagerService.getList();
  }

  async getElementById(id: string): Promise<RenderQueue> {
    const element =
      await this.renderQueueHandlerManagerService.getElementById(id);
    if (!element)
      throw new NotFoundException(`Element with id ${id} not found`);

    return element;
  }

  async proceedRenderQueueElements(
    id: string,
    dto: Partial<RenderQueue>,
  ): Promise<RenderQueue> {
    return this.renderQueueHandlerManagerService.proceedRenderQueueElements(
      id,
      dto,
    );
  }
}
