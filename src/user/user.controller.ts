import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ExternalService } from './external.service';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiUserPostRequestBodyDto } from './dto/api-user-post-request-body.dto';
import { ERROR } from 'src/constant/error';
import { ApiExceptionResponse } from 'src/commons/decorators/api-exception-response.decorator';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly externalService: ExternalService,
  ) { }

  @Post()
  @ApiOperation({ summary: '새로운 유저 생성' })
  @ApiExceptionResponse([ERROR.FILE_LOCK_FAILED], {
    description: '파일이 잠겨 있을 때',
    status: HttpStatus.CONFLICT,
  })
  @ApiResponse({
    status: 400,
    description: '잘못된 요청 데이터입니다.',
  })
  async createUser(@Body() dto: ApiUserPostRequestBodyDto) {
    return this.userService.createUser(dto)
  }

  @Post(':userId/posts')
  async addPost(
    @Param('userId') userId: number,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.userService.addPost(userId, title, content);
  }

  @Get('external-data')
  async getExternalData() {
    return this.externalService.fetchExternalData();
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: number) {
    return this.userService.deleteUser(userId);
  }
}
