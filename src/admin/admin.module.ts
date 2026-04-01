import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AdminBookingController } from './admin-booking.controller';
import { AdminRoomController } from './admin-room.controller';
import { AdminContactController } from './admin-contact.controller';

@Module({
  imports: [PrismaModule],
  controllers: [
    AdminBookingController,
    AdminRoomController,
    AdminContactController,
  ],
})
export class AdminModule {}