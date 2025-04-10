import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../providers/database/prisma.service';
import { ProviderLogs } from '@prisma/client';

@Injectable()
export class ProviderLogsService {
  constructor(private prismaService: PrismaService) {}

  public async createLogRecord(dto: ProviderLogs): Promise<ProviderLogs> {
    return await this.prismaService.providerLogs.create({
      data: { ...dto, data: dto.data ?? undefined },
    });
  }
}
