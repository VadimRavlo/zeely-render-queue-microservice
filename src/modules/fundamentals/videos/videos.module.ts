import { Module } from '@nestjs/common';
import { PrismaModule } from '../../providers/database/prisma.module';
import { VideosService } from './videos.service';

@Module({
  imports: [PrismaModule],
  providers: [VideosService],
  exports: [VideosService],
})
export class VideosModule {}
