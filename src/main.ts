import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Indicar que cuando se creen validaciones en multiples entidades, siempre van a validarse (automaticamente)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
