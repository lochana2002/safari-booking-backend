import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomBookingDto } from './dto/create-room-booking.dto';

@Controller('room-bookings')
export class RoomController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() data: CreateRoomBookingDto) {
    return this.prisma.roomBooking.create({
      data,
    });
  }
}