import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      trips: true,
      visitedCountries: true,
      residentCountry: true,
    },
    orderBy: {
      visitedCountries: {
        _count: 'desc',
      },
    },
  });

  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
