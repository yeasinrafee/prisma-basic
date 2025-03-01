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
      title: 'This is title 5',
      content: 'This is content',
      authorId: 2,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 3,
          },
          {
            categoryId: 4,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
