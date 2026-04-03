import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.blog.create({ data });
  }

  findAll() {
    return this.prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.blog.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.blog.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.blog.delete({
      where: { id },
    });
  }
}