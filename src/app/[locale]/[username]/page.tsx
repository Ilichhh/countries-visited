import { prisma } from '@/src/lib/prisma';

import { notFound } from 'next/navigation';

interface UserProfilePageProps {
  params: {
    username: string;
  };
}

export default async function UserProfilePage({ params }: UserProfilePageProps) {
  const { username } = await params;

  const user = await prisma.user.findUnique({
    where: { uniqueLink: username },
  });

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>Публичная страница {user.fullName}</h1>
      <p>Электронная почта: {user.email}</p>
    </div>
  );
}
