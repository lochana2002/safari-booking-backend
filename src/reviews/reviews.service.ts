import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const { rating, comment, bookingId } = data;

    // ✅ Validate input
    if (rating === undefined || !comment || bookingId === undefined) {
      throw new BadRequestException('Missing fields');
    }

    const id = Number(bookingId);

    if (isNaN(id)) {
      throw new BadRequestException('Invalid bookingId');
    }

    // ✅ Check booking exists
    const booking = await this.prisma.booking.findUnique({
      where: { id },
    });

    if (!booking) {
      throw new BadRequestException('Booking not found');
    }

    // ✅ FIX: use findFirst (NOT findUnique)
    const existingReview = await this.prisma.review.findFirst({
      where: { bookingId: id },
    });

    if (existingReview) {
      throw new BadRequestException(
        'You have already submitted a review for this booking',
      );
    }

    return this.prisma.review.create({
      data: {
        rating: Number(rating),
        comment,
        bookingId: id,
      },
    });
  }

  findByBooking(bookingId: number) {
    const id = Number(bookingId);

    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid bookingId');
    }

    return this.prisma.review.findMany({
      where: { bookingId: id },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAverageRating(bookingId: number) {
    const id = Number(bookingId);

    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid bookingId');
    }

    const result = await this.prisma.review.aggregate({
      where: { bookingId: id },
      _avg: { rating: true },
    });

    return result._avg?.rating ?? 0;
  }

  // ✅ Used by frontend "already reviewed" check
  async findOneByBooking(bookingId: number) {
    const id = Number(bookingId);

    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid bookingId');
    }

    return this.prisma.review.findFirst({
      where: { bookingId: id },
    });
  }
}