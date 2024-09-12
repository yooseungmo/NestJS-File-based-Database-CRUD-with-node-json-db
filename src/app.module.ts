import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { DbController } from './db/db.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { LogMiddleware } from './common/middleware/log.middleware';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [AppController, DbController],
  providers: [AppService, DbService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      LogMiddleware,
    ).forRoutes({
      path:'*',
      method: RequestMethod.ALL
    })
  }
}
