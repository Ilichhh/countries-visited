import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';

import { UserWithTripsAndCountries } from '@/prisma/types';
import { authOptions } from '../../auth/[...nextauth]/route';

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
      residentCountry: true,
    },
  });

  const typedUser: UserWithTripsAndCountries | null = user;

  return NextResponse.json(typedUser);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const data = await req.json();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.id !== id) {
      return NextResponse.json(
        { message: 'Forbidden: You can only update your own data' },
        { status: 403 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { username: data.username },
    });

    if (existingUser && existingUser.id.toString() !== session.user.id) {
      return NextResponse.json({ message: 'Username already taken' }, { status: 409 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { username: data.username },
    });

    return NextResponse.json(
      { message: 'Username updated successfully', user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
