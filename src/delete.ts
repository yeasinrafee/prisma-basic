import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 5,
  //     },
  //   });

  //   const deleteMany = await prisma.post.deleteMany({
  //     where: {
  //       published: false,
  //     },
  //   });

  const upsertData = await prisma.post.upsert({
    where: {
      id: 6,
    },
    update: {
      authorName: 'Yeasin Rafee',
    },
    create: {
      title: 'Title 1',
      content: 'Content 1',
    },
  });
  console.log(upsertData);
};

deleteData();
