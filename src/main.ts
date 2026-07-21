import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: [
      'http://localhost:5173', // Vite local
      'https://your-frontend.onrender.com', // Replace with your frontend URL
    ],
    credentials: true,
  });

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // Render provides PORT automatically
  const port = process.env.PORT || 4002;

  await app.listen(port);

  console.log(`🚀 Server running on port ${port}`);
}

bootstrap();