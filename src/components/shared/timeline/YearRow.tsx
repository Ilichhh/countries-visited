import { Box, Flex, Text } from '@chakra-ui/react';

interface YearRowProps {
  year: number;
}

export const YearRow = ({ year }: YearRowProps) => {
  // const daysInYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 366 : 365;

  return (
    <Flex gap="4">
      <Text>{year}</Text>
      <Box background="tomato" height="4" width="100%" padding="4" color="white"></Box>
    </Flex>
  );
};
