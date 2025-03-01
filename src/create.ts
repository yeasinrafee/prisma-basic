import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: 'user2',
  //     email: 'user2@gmail.com',
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: 'This is bio...',
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: 'Software engineering',
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: 'This is title',
      content: 'This is content',
      authorId: 1,
      postCategory: {
        create: {
          categoryId: 2,
          // category: {
          //   connect: {
          //     id: 1,
          //   },
          // },
        },
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
