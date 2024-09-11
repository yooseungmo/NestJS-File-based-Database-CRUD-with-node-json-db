import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { stringValidationMessage } from '../../commons/validation-message/string-validation.message';

export class ApiUserPostRequestBodyDto {
  @IsString({
    message: stringValidationMessage
  })
  @ApiProperty({
    example: 'Blanc',
    description: '이름',
  })
  name: string;
}

// 만약에 엔티티구조를 쓰면 PickType으로 엔티티에 다 몰아넣고 간단히 가능
// export class ApiUserPostRequestBodyDto extends PickType(UserEntity,['name', ... ])}