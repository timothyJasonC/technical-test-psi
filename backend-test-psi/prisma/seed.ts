import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Buat user
  const user1 = await prisma.user.create({
    data: {
      id: '12qwer',
      nama: 'Imron',
      telp: '081234567890',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      id: '321rewq',
      nama: 'Juli',
      email: 'Sammy@mail.com',
      telp: '0987654321',
    },
  });

  // Buat perusahaan dan kaitkan dengan user
  await prisma.company.create({
    data: {
      id: 'trew098',
      userId: '12qwer',
      companyCode: 'SPI',
      companyName: 'Samudera',
    },
  });

  await prisma.company.create({
    data: {
      id: 'poiuyt1234',
      userId: '321rewq',
      companyCode: 'PIC',
      companyName: 'Samudera',
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
