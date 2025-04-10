import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class EstimateReadinessRequestDto {
  @ApiProperty({
    type: 'number',
    description:
      'Duration in seconds of video material. Will be used to calculate duration of rendering based on average value',
    example: '35',
  })
  @IsNotEmpty()
  @IsNumber()
  videoDurationSeconds: number;
}
