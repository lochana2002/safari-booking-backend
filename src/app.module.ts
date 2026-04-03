import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookingModule } from './booking/booking.module';
import { RoomModule } from './room/room.module';
import { ContactModule } from './contact/contact.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module'
import { BlogModule } from './blog/blog.module';


@Module({
  imports: [
    ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: '.env',
}),
    BookingModule,
    RoomModule,
    ContactModule,
    PrismaModule,
    AuthModule,
    AdminModule,
    BlogModule
  ],
})
export class AppModule {}
