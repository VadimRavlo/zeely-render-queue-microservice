import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit {
  //extends PrismaClient
  async onModuleInit(): Promise<void> {
    // await this.$connect();
  }
}
