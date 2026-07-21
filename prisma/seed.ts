import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const existingAdmin = await prisma.admin.findUnique({
    where: {
      email: 'admin@safari.com',
    },
  });

  if (!existingAdmin) {
    await prisma.admin.create({
      data: {
        email: 'admin@safari.com',
        password: hashedPassword,
      },
    });

    console.log('✅ Admin created');
  } else {
    console.log('ℹ️ Admin already exists');
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });