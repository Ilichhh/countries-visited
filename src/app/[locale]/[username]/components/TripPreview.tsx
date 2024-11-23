import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { Group, Text } from '@chakra-ui/react';

import { TripWithPhotos } from '@/prisma/types';

interface TripPreviewProps {
  data: TripWithPhotos;
}

export const TripPreview = ({ data }: TripPreviewProps) => {
  const pathname = usePathname();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-EN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const convertedDate =
    formatDate(data?.startDate as unknown as string) +
    ' - ' +
    formatDate(data?.endDate as unknown as string);

  return (
    <Group gap="4">
      <Link href={`${pathname}/${data.country.name}/${data.id}`}>{data.country.name}</Link>
      {data?.startDate && data?.endDate && <Text>{convertedDate}</Text>}
    </Group>
  );
};
