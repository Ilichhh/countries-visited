import { Prisma } from '@prisma/client';

export type TripWithPhotos = Prisma.TripGetPayload<{
  include: { country: true; photos: true };
}>;

export type UserWithTripsAndCountries = Prisma.UserGetPayload<{
  include: { trips: true; visitedCountries: true };
}>;
