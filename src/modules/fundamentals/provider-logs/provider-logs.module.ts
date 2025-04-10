import { Module } from '@nestjs/common';
import { PrismaModule } from '../../providers/database/prisma.module';
import { ProviderLogsService } from './provider-logs.service';

@Module({
  imports: [PrismaModule],
  providers: [ProviderLogsService],
  exports: [ProviderLogsService],
})
export class ProviderLogsModule {}
