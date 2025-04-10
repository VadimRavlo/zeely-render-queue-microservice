import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../providers/database/prisma.service';
import { RenderQueue } from '@prisma/client';

@Injectable()
export class RenderQueueService implements OnModuleInit {
  constructor(private prismaService: PrismaService) {}

  async onModuleInit(): Promise<void> {
    const renderQueue = await this.getRenderQueue();
    Logger.debug(renderQueue);
  }

  public async getRenderQueue(): Promise<RenderQueue[]> {
    return await this.prismaService.renderQueue.findMany();
  }

  public async getRenderQueuesEntryById(id: string): Promise<RenderQueue> {
    return await this.prismaService.renderQueue.findFirstOrThrow({
      where: { id },
    });
  }

  public async createRenderQueueEntry(dto: RenderQueue): Promise<RenderQueue> {
    return await this.prismaService.renderQueue.create({ data: dto });
  }

  public async updateRenderQueueEntry(
    id: string,
    dto: Partial<RenderQueue>,
  ): Promise<RenderQueue> {
    return await this.prismaService.renderQueue.update({
      where: { id },
      data: dto,
    });
  }
}
