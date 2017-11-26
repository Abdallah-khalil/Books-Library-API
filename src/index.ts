import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(cors());
  app.use(bodyParser.json());
  await app.listen(3001);
}
bootstrap();
