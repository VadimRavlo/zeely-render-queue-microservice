import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../providers/database/prisma.service';
import { RenderQueue, RenderQueueStatus } from '@prisma/client';

@Injectable()
export class RenderQueueService {
  constructor(private prismaService: PrismaService) {}

  public async getRenderQueue(): Promise<RenderQueue[]> {
    return await this.prismaService.renderQueue.findMany({
      include: { video: { include: { media: { include: { image: true } } } } },
    });
  }

  public async getRenderQueuesEntryById(
    id: string,
  ): Promise<RenderQueue | null> {
    return await this.prismaService.renderQueue.findUnique({
      where: { id },
      include: { video: { include: { media: { include: { image: true } } } } },
    });
  }

  public async getFirstEntryByStatus(
    statuses: RenderQueueStatus[],
  ): Promise<RenderQueue | null> {
    return await this.prismaService.renderQueue.findFirst({
      where: { status: { in: statuses } },
      orderBy: { createdAt: `asc` },
      include: { video: { include: { media: { include: { image: true } } } } },
    });
  }

  public async createRenderQueueEntry(dto: RenderQueue): Promise<RenderQueue> {
    return await this.prismaService.renderQueue.create({ data: dto });
  }

  public async updateRenderQueueEntryById(
    id: string,
    dto: Partial<RenderQueue>,
  ): Promise<RenderQueue> {
    return await this.prismaService.renderQueue.update({
      where: { id },
      data: dto,
    });
  }
}
