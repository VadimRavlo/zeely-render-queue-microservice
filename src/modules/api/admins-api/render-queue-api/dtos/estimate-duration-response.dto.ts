import { ApiProperty } from '@nestjs/swagger';

export class EstimateDurationResponseDto {
  @ApiProperty({
    description:
      'Estimate duration in percentage of total queue duration, 4 decimals',
    example: '23.7899%',
  })
  renderEstimation: string;
}
