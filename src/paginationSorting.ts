import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });

  // cursor based pagination
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 15,
    },
  });

  // sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: 'asc',
    },
  });

  console.log(offsetData);
};
paginationSorting();
