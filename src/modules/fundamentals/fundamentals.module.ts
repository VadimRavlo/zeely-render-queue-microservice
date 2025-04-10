import { Module } from '@nestjs/common';

import { RenderQueueModule } from './render-queue/render-queue.module';

const modules = [RenderQueueModule];

@Module({
  imports: modules,
  exports: modules,
})
export class FundamentalsModule {}
