import { IsString, IsEmail, IsInt, IsOptional } from 'class-validator';

export class CreateRoomBookingDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsInt()
  adults: number;

  @IsInt()
  kids: number;

  @IsString()
  country: string;

  @IsString()
  roomType: string;

  @IsOptional()
  @IsString()
  message?: string;
}