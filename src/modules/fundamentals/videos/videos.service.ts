import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../providers/database/prisma.service';
import { Video } from '@prisma/client';

@Injectable()
export class VideosService {
  constructor(private prismaService: PrismaService) {}

  public async getVideos(): Promise<Video[]> {
    return await this.prismaService.video.findMany();
  }

  public async getVideoById(id: string): Promise<Video | null> {
    return await this.prismaService.video.findUnique({
      where: { id },
    });
  }

  public async createVideo(dto: Video): Promise<Video> {
    return await this.prismaService.video.create({
      data: { ...dto, subtitles: dto.subtitles ?? undefined },
    });
  }

  public async updateVideo(id: string, dto: Partial<Video>): Promise<Video> {
    return await this.prismaService.video.update({
      where: { id },
      data: { ...dto, subtitles: dto.subtitles ?? undefined },
    });
  }
}
