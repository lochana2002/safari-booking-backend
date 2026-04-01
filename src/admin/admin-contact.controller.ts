import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { Delete, Param } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('admin/contacts')
export class AdminContactController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getContacts() {
    return this.prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  @Delete(':id')
  deleteBooking(@Param('id') id: string) {
    return this.prisma.booking.delete({
      where: { id: Number(id) },
  });
}

@Patch(':id')
updateBooking(@Param('id') id: string, @Body() body: any) {
  return this.prisma.booking.update({
    where: { id: Number(id) },
    data: body,
  });
}

}