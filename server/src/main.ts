import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT ?? 5001;
  await app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
}

(async () => {await start()})();