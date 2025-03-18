import { NestFactory } from '@nestjs/core';
import { ChildModule } from './children/child.module';

async function bootstrap() {
  const app = await NestFactory.create(ChildModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
