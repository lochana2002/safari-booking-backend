import { IsEmail, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsInt()
  @Min(1)
  adults: number;

  @IsInt()
  @Min(0)
  kids: number;

  @IsString()
  accommodationType: string;

  @IsOptional()
  @IsString()
  message?: string;
}
