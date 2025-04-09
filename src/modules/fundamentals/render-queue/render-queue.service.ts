import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../providers/database/prisma.service';

@Injectable()
export class RenderQueueService {
  constructor(private prismaService: PrismaService) {}
}
