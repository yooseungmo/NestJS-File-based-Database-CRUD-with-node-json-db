import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileManager } from 'src/utils/file-manager';
import { ExternalService } from './external.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, ExternalService, UserRepository, {
    provide: FileManager, // FileManager에 대한 의존성 주입 설정
    useFactory: () => new FileManager('myDataBase'),  // 'myDataBase' 경로로 주입
  },]
})
export class UserModule { }
