import { Module } from '@nestjs/common';
import { PrismaModule } from '../../providers/database/prisma.module';
import { RenderQueueService } from './render-queue.service';

@Module({
  imports: [PrismaModule],
  providers: [RenderQueueService],
  exports: [RenderQueueService],
})
export class RenderQueueModule {}
