import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../providers/database/prisma.service';
import { Image } from '@prisma/client';

@Injectable()
export class ImagesService {
  constructor(private prismaService: PrismaService) {}

  public async getImages(): Promise<Image[]> {
    return await this.prismaService.video.findMany();
  }

  public async getImageById(id: string): Promise<Image | null> {
    return await this.prismaService.video.findUnique({
      where: { id },
    });
  }

  public async createImage(dto: Image): Promise<Image> {
    return await this.prismaService.video.create({
      data: dto,
    });
  }

  public async updateImage(id: string, dto: Partial<Image>): Promise<Image> {
    return await this.prismaService.video.update({
      where: { id },
      data: dto,
    });
  }
}
