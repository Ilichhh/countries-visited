import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { Trip } from '@prisma/client';

interface TripPreviewProps {
  data: Trip;
}

export const TripPreview = ({ data }: TripPreviewProps) => {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/${data?.countryName.toLowerCase().replace(' ', '-')}`}>
      {data?.countryName}
    </Link>
  );
};
