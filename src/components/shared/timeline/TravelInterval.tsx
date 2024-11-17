import { Flex, Text } from '@chakra-ui/react';
import { Travel } from '@prisma/client';

interface TravelIntervalProps {
  travel: Travel;
}

export const TravelInterval = ({ travel }: TravelIntervalProps) => {
  return (
    <Flex gap={4}>
      <Text>{travel.startDate?.toString()}</Text>
      <Text>{travel.endDate?.toString()}</Text>
    </Flex>
  );
};
