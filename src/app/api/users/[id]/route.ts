import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = await +params.id;

  const user = await prisma.user.findFirst({
    where: { id },
  });

  return NextResponse.json(user);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  const userId = +id;

  const { countryName, startDate, endDate } = await req.json();

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
