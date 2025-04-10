import { Module } from '@nestjs/common';
import { RenderQueueHandlerManagerModule } from './render-queue-handler-manager/render-queue-handler-manager.module';

const modules = [RenderQueueHandlerManagerModule];

@Module({
  imports: modules,
  exports: modules,
})
export class ManagersModule {}
