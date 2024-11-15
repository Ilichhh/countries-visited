import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  const userId = +id;

  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      travels: true,
    },
  });

  return NextResponse.json(user);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  const userId = +id;

  const { countryName, countryCode, startDate, endDate } = await req.json();

  try {
    const [updatedUser, newTravel] = await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: {
          visitedCountriesCount: {
            increment: 1,
          },
          totalTravelDays: {
            increment: 0,
          },
        },
      }),
      prisma.travel.create({
        data: {
          userId,
          countryName,
          countryCode,
          startDate,
          endDate,
        },
      }),
    ]);
    return NextResponse.json({ updatedUser, newTravel });
  } catch (error) {
    console.error(error);
  }
}
