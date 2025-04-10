import { Module } from '@nestjs/common';

import { RenderQueueModule } from './render-queue/render-queue.module';
import { VideosModule } from './videos/videos.module';
import { ImagesModule } from './images/images.module';

const modules = [ImagesModule, RenderQueueModule, VideosModule];

@Module({
  imports: modules,
  exports: modules,
})
export class FundamentalsModule {}
