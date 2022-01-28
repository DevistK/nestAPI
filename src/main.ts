import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function serverStarting() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3001);
}
serverStarting();
