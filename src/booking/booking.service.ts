import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBookingDto) {
    return this.prisma.booking.create({ data });
  }

  findAll() {
    return this.prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.booking.findUnique({
      where: { id },
    });
  }
}
