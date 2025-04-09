import { Module } from '@nestjs/common';

import { PrismaModule } from './database/prisma.module';

const modules = [PrismaModule];

@Module({
  imports: modules,
  exports: modules,
})
export class ProvidersModule {}
