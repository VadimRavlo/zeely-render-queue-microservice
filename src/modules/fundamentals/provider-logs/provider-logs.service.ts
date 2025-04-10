import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../providers/database/prisma.service';
import { ProviderLogs } from '@prisma/client';

@Injectable()
export class ProviderLogsService {
  constructor(private prismaService: PrismaService) {}

  public async createLogRecord(dto: Omit<ProviderLogs, 'id' | 'createdAt' | 'data'>): Promise<ProviderLogs> {
    return await this.prismaService.providerLogs.create({
      data: dto,
    });
  }
}
