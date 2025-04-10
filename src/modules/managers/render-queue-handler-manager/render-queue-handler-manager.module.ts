import { Module } from '@nestjs/common';

import { RenderQueueHandlerManagerService } from './render-queue-handler-manager.service';
import { RenderQueueModule } from '../../fundamentals/render-queue/render-queue.module';
import { ProviderLogsModule } from '../../fundamentals/provider-logs/provider-logs.module';

@Module({
  imports: [RenderQueueModule, ProviderLogsModule],
  providers: [RenderQueueHandlerManagerService],
  exports: [RenderQueueHandlerManagerService],
})
export class RenderQueueHandlerManagerModule {}
