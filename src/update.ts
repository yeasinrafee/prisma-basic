import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates = async () => {
  const singleUpdate = await prisma.post.update({
    where: {
      id: 3,
    },
    data: {
      title: 'This is title 3',
      content: 'This is content 3',
      authorName: 'Yeasin Rafee',
    },
  });

  console.log(singleUpdate);
};

updates();
