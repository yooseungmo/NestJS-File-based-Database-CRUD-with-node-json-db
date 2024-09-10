import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class ApiUserPostRequestBodyDto {
  @IsString()
  @ApiProperty({
    example: 'Blanc',
    description: '이름',
  })
  name: string;
}
