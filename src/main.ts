import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app: any = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(4000);
}
bootstrap();
