import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const relationalQueries = async () => {
  //   const result = await prisma.user.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //     include: {
  //       post: true,
  //     },
  //   });

  // relational filters
  const publishedPostUser = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.log(publishedPostUser);
};

relationalQueries();
