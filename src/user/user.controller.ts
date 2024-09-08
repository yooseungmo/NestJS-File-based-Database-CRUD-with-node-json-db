import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ExternalService } from './external.service';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly externalService: ExternalService,
  ) { }

  @Post()
  async createUser(@Body('name') name: string) {
    return this.userService.createUser(name)
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
