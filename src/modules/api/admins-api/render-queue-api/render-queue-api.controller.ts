import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AdminRenderQueueApiService } from './render-queue-api.service';
import { RenderQueue } from '@prisma/client';
import { IEstimateDurationResponse } from '../../../managers/render-queue-handler-manager/types';
import { EstimateReadinessRequestDto } from './dtos';

@Controller('v1/admins/renderQueue')
@ApiTags('Admin Render Queue API')
export class AdminRenderQueueApiController {
  constructor(
    private readonly renderQueueApiService: AdminRenderQueueApiService,
  ) {}

  @Get('estimateReadiness')
  @ApiOperation({ summary: `Get new video render readiness estimation` })
  // @ApiOkResponse(DTO)
  async estimateReadiness(
    @Body() dto: EstimateReadinessRequestDto,
  ): Promise<IEstimateDurationResponse> {
    return this.renderQueueApiService.estimateReadiness(
      dto.videoDurationSeconds,
    );
  }

  @Get()
  @ApiOperation({ summary: `Get render queue element` })
  // @ApiOkResponse(DTO)
  async getList(): Promise<RenderQueue[]> {
    return this.renderQueueApiService.getList();
  }

  @Get(':queueId')
  @ApiOperation({ summary: `Get render queue element` })
  // @ApiOkResponse(DTO)
  async getElementById(
    @Param('queueId', new ParseUUIDPipe()) queueId: string,
  ): Promise<RenderQueue> {
    return await this.renderQueueApiService.getElementById(queueId);
  }

  @Post(':queueId/proceed')
  @ApiOperation({ summary: 'Proceed render queue element' })
  // @ApiOkResponse(DTO)
  async updateRenderQueueElement(
    @Param('queueId', new ParseUUIDPipe()) queueId: string,
    @Body() dto: Partial<RenderQueue>,
  ): Promise<RenderQueue> {
    return this.renderQueueApiService.proceedRenderQueueElements(queueId, dto);
  }
}
