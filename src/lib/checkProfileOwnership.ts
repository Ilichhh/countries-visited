import { prisma } from '@/src/lib/prisma';
import { getUserSession } from '@/src/lib/getUserSession';

export async function checkProfileOwnership(username: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return false;
  }

  const session = await getUserSession();

  return !!(session?.id && user.id === +session.id);
}
