import { Controller, Get, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('admin/bookings')
export class AdminBookingController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getBookings() {
    return this.prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
