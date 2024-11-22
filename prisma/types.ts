import { Prisma } from '@prisma/client';

export type TripWithPhotos = Prisma.TripGetPayload<{
  include: { photos: true };
}>;

export type UserWithTrips = Prisma.UserGetPayload<{
  include: { trips: true };
}>;
