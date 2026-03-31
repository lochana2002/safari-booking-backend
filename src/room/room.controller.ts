import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('room-bookings')
export class RoomController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() data: any) {
    return this.prisma.roomBooking.create({ data });
  }
}