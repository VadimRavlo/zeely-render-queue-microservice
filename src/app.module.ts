import { Module } from '@nestjs/common';
import { RenderQueueService } from './modules/fundamentals/render-queue/render-queue.service';
import { PrismaService } from './modules/providers/database/prisma.service';
import { ProvidersModule } from './modules/providers/providers.module';
import { ManagersModule } from './modules/managers/managers.module';
import { AdminsApiModule } from './modules/api/admins-api/admins-api.module';
import { CommonApiModule } from './modules/api/common-api/common-api.module';

@Module({
  imports: [ProvidersModule, ManagersModule, AdminsApiModule, CommonApiModule],
  controllers: [],
  providers: [RenderQueueService, PrismaService],
})
export class AppModule {}
