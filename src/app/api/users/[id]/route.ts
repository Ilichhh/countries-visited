import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id: identifier } = await params;

  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { id: !isNaN(Number(identifier)) ? Number(identifier) : undefined },
        { uniqueLink: identifier },
      ],
    },
    include: {
      trips: true,
    },
  });

  return NextResponse.json(user);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  const userId = +id;

  const { countryName, countryCode, startDate, endDate } = await req.json();

  try {
    const [updatedUser, newTrip] = await prisma.$transaction([
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
      prisma.trip.create({
        data: {
          userId,
          countryName,
          countryCode,
          startDate,
          endDate,
        },
      }),
    ]);
    return NextResponse.json({ updatedUser, newTrip });
  } catch (error) {
    console.error(error);
  }
}
