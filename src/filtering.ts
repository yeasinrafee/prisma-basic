import { PrismaClient } from '@prisma/client';
import { title } from 'process';

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: 'title',
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: 'title',
          },
        },
        {
          published: false,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: 'title',
          },
        },
      ],
    },
  });

  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: 'user2',
      },
    },
  });

  const endsWith = await prisma.user.findMany({
    where: {
      email: {
        endsWith: '.com',
      },
    },
  });

  const equals = await prisma.user.findMany({
    where: {
      email: {
        equals: 'user@gmail.com',
      },
    },
  });

  const userNameArray = ['user', 'user2', 'user3'];
  const userNameByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  console.dir(inDepthData, { depth: Infinity });
};

filtering();
