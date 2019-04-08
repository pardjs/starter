import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './constants';
import {
  logger,
  corsOptions,
  ValidationPipe,
  HttpExceptionFilter,
} from '@pardjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(PORT);
  logger.info(`service started at ${PORT}`);
}
bootstrap();
