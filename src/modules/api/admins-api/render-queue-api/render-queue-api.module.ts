import { Module } from '@nestjs/common';

import { RenderQueueHandlerManagerModule } from '../../../managers/render-queue-handler-manager/render-queue-handler-manager.module';
import { AdminRenderQueueApiController } from './render-queue-api.controller';
import { AdminRenderQueueApiService } from './render-queue-api.service';

@Module({
  imports: [RenderQueueHandlerManagerModule],
  controllers: [AdminRenderQueueApiController],
  providers: [AdminRenderQueueApiService],
})
export class AdminRenderQueueApiModule {}
