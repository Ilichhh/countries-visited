import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

import type { TripWithPhotos } from '@/prisma/types';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;

  const trip = await prisma.trip.findUnique({
    where: { id: Number(id) },
    include: {
      photos: true,
    },
  });

  const typedTrip: TripWithPhotos | null = trip;
  return NextResponse.json(typedTrip);
}
