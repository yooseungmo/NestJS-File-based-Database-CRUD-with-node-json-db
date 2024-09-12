import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerModels } from './swagger';
import { UnifiedExceptionFilter } from './common/filters/unified-http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn'], // 로그 레벨 설정
  });

  app.useGlobalFilters(new UnifiedExceptionFilter());

  SwaggerModule.setup(
    'docs', // Swagger 문서를 볼 수 있는 URL 경로 (http://localhost:3000/docs)
    app, // NestJS 애플리케이션 인스턴스
    SwaggerModule.createDocument( // Swagger 문서를 생성하는 함수
      app, // NestJS 애플리케이션 인스턴스
      new DocumentBuilder() // Swagger 설정을 정의하는 빌더 객체
        .setTitle('Toss_gogogo') // API 문서의 제목
        .setDescription('NestJS-File-based-Database-CRUD-with-node-json-db') // API 문서에 대한 설명
        .setVersion('1.0.0') // API 버전 정보
        .addTag('swagger') // API 태그, Swagger UI에서 그룹핑할 때 사용
        .build(), // DocumentBuilder 설정 완료
      {
        extraModels: SwaggerModels, // 추가로 정의된 Swagger 모델을 포함시키기 위한 옵션 (추가 모델이 있을 때 사용)
      },
    )
  );

  await app.listen(3000);
}
bootstrap();
