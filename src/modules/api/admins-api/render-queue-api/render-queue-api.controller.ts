import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AdminRenderQueueApiService } from './render-queue-api.service';
import { RenderQueue } from '@prisma/client';
import {
  EstimateDurationResponseDto,
  EstimateReadinessRequestDto,
} from './dtos';

@Controller('v1/admins/renderQueue')
@ApiTags('Admin Render Queue API')
export class AdminRenderQueueApiController {
  constructor(
    private readonly renderQueueApiService: AdminRenderQueueApiService,
  ) {}

  @Get('estimateReadiness')
  @ApiOperation({ summary: `Get new video render readiness estimation` })
  @ApiResponse({ status: 200, type: EstimateDurationResponseDto })
  async estimateReadiness(
    @Body() dto: EstimateReadinessRequestDto,
  ): Promise<EstimateDurationResponseDto> {
    return this.renderQueueApiService.estimateReadiness(
      dto.videoDurationSeconds,
    );
  }

  @Get()
  @ApiOperation({ summary: `Get render queue element` })
  // TODO: need to add Swagger DTO, cannot do it due to time limits
  async getList(): Promise<RenderQueue[]> {
    return this.renderQueueApiService.getList();
  }

  @Get(':queueId')
  @ApiOperation({ summary: `Get render queue element` })
  // TODO: need to add Swagger DTO, cannot do it due to time limits
  async getElementById(
    @Param('queueId', new ParseUUIDPipe()) queueId: string,
  ): Promise<RenderQueue> {
    return await this.renderQueueApiService.getElementById(queueId);
  }

  @Post(':queueId/proceed')
  @ApiOperation({ summary: 'Proceed render queue element' })
  // TODO: need to add Swagger DTO, cannot do it due to time limits
  async updateRenderQueueElement(
    @Param('queueId', new ParseUUIDPipe()) queueId: string,
    // TODO: need to add Swagger DTO with class-validation's decorators, cannot do it due to time limits
    @Body() dto: Partial<RenderQueue>,
  ): Promise<RenderQueue> {
    return this.renderQueueApiService.proceedRenderQueueElements(queueId, dto);
  }
}
