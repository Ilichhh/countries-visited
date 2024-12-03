import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

import { TripData } from '@/src/types/trip';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = Number(searchParams.get('userId'));

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const trips =
      (await prisma.trip.findMany({
        where: {
          userId,
        },
        include: {
          country: true,
          photos: true,
        },
      })) || [];

    return NextResponse.json(trips, { status: 200 });
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Failed to fetch trips' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const tripData: TripData = await req.json();
    const { userId, country, startDate, endDate, description } = tripData;

    if (!userId || !tripData || !tripData.country) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newTrip = await prisma.$transaction(async (tx) => {
      let existingCountry = await tx.country.findUnique({
        where: { cca2: country.cca2 },
      });

      if (!existingCountry) {
        existingCountry = await tx.country.create({
          data: {
            cca2: country.cca2,
            name: country.name.common,
            region: country.region,
            flagUrl: country.flags.svg || null,
          },
        });
      }

      await tx.user.update({
        where: { id: Number(userId) },
        data: {
          visitedCountries: {
            connect: { cca2: existingCountry.cca2 },
          },
        },
      });

      const newTrip = await tx.trip.create({
        data: {
          user: { connect: { id: Number(userId) } },
          country: { connect: { cca2: existingCountry.cca2 } },
          startDate: startDate || null,
          endDate: endDate || null,
          description: description,
        },
      });

      return newTrip;
    });

    return NextResponse.json(newTrip, { status: 201 });
  } catch (error) {
    console.error('Error adding trip:', error);
    return NextResponse.json({ error: 'Failed to add trip' }, { status: 500 });
  }
}
