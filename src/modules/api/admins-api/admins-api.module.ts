import { Module } from '@nestjs/common';
import { AdminRenderQueueApiModule } from './render-queue-api/render-queue-api.module';

const modules = [AdminRenderQueueApiModule];

@Module({
  imports: modules,
  exports: modules,
})
export class AdminsApiModule {}
