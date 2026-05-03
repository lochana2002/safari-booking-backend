import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Post()
  create(@Body() body: any) {
    return this.reviewsService.create(body);
  }

  @Get('booking/:id')
getBookingReviews(@Param('id') id: string) {
  return this.reviewsService.findByBooking(Number(id));
}

@Get('booking/:id/average')
getAverage(@Param('id') id: string) {
  return this.reviewsService.getAverageRating(Number(id));
}
}