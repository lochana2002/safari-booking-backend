import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private aiService: AiService) {}

  @Post('chat')
  async chat(@Body('message') message: string) {
    console.log('Message received:', message);
    return this.aiService.chat(message);
  }
}