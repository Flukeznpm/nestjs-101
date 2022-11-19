import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); //กำหนดว่าทุก Path ต้องขึ้นต้นด้วยคำว่า api
  // app.use(logger);
  await app.listen(3000);
}
bootstrap();
