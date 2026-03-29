import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async login(email: string, password: string) {
    const admin = await this.prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) throw new UnauthorizedException();

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) throw new UnauthorizedException();

    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    return {
  access_token: this.jwt.sign(
    {
      sub: admin.id,
      email: admin.email,
    },
    {
      secret: process.env.JWT_SECRET, 
    },
  ),
};
  }
}