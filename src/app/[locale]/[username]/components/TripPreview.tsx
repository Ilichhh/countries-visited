import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { Trip } from '@prisma/client';
import { Group, Text } from '@chakra-ui/react';

interface TripPreviewProps {
  data: Trip;
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
      <Link href={`${pathname}/${data.countryName}/${data.id}`}>{data.countryName}</Link>
      {data?.startDate && data?.endDate && <Text>{convertedDate}</Text>}
    </Group>
  );
};
