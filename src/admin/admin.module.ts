import { Module } from '@nestjs/common';
import { AdminBookingController } from './admin-booking.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AdminBookingController],
})
export class AdminModule {}
