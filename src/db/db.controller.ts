import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import path from 'path/posix';
import { DbService } from './db.service';

@Controller('db')
export class DbController {
  constructor(private readonly dbService: DbService) { }

  @Post(':path')
  create(@Param('path') path: string, @Body() data: any): string {
    this.dbService.create(`/${path}`, data);
    return `Data created at /${path}`
  }

  @Get(':path')
  read(@Param('path') path: string): any {
    return this.dbService.read(`/${path}`)
  }

  @Put(':path')
  update(@Param('path') path: string, @Body() data: any): string {
    this.dbService.update(`/${path}`, data);
    return `Data at /${path} updated`
  }

  @Delete(':path')
  delete(@Param('path') path: string): string {
    return `Data at /${path} deleted`
  }
}
