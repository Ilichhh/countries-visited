import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

import { UserWithTripsAndCountries } from '@/prisma/types';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id: identifier } = await params;

  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { id: !isNaN(Number(identifier)) ? Number(identifier) : undefined },
        { username: identifier },
      ],
    },
    include: {
      trips: true,
      visitedCountries: true,
    },
  });

  const typedUser: UserWithTripsAndCountries | null = user;

  return NextResponse.json(typedUser);
}
