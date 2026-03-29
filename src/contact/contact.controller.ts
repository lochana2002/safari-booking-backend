import { Controller, Post, Body, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('contact')
export class ContactController {
  constructor(private prisma: PrismaService) {}

  // ✅ Save contact message
  @Post()
  async create(@Body() body: any) {
    return this.prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        type: body.type,
        message: body.message,
      },
    });
  }

  // ✅ Get all messages (for admin later)
  @Get()
  async findAll() {
    return this.prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}