import { Module } from '@nestjs/common';
import { PrismaModule } from '../../providers/database/prisma.module';
import { ImagesService } from './images.service';

@Module({
  imports: [PrismaModule],
  providers: [ImagesService],
  exports: [ImagesService],
})
export class ImagesModule {}
