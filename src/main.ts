import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 app.enableCors({
  origin: [
    "http://localhost:5173",
    "https://safari-booking-suul.vercel.app",
  ],
  credentials: true,
});

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 4002;

  await app.listen(port);

  console.log(`🚀 Server running on port ${port}`);
}

bootstrap();