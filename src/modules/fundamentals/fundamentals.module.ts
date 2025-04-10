import { Module } from '@nestjs/common';

import { RenderQueueModule } from './render-queue/render-queue.module';
import { VideosModule } from './videos/videos.module';
import { ImagesModule } from './images/images.module';
import { ProviderLogsModule } from './provider-logs/provider-logs.module';

const modules = [
  ImagesModule,
  ProviderLogsModule,
  RenderQueueModule,
  VideosModule,
];

@Module({
  imports: modules,
  exports: modules,
})
export class FundamentalsModule {}
