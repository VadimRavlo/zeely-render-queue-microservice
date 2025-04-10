import { Module } from '@nestjs/common';

import { RenderQueueHandlerManagerService } from './render-queue-handler-manager.service';
import { RenderQueueModule } from '../../fundamentals/render-queue/render-queue.module';

@Module({
  imports: [RenderQueueModule],
  providers: [RenderQueueHandlerManagerService],
  exports: [RenderQueueHandlerManagerService],
})
export class RenderQueueHandlerManagerModule {}
