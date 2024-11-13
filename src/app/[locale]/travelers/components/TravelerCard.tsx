import { User } from '@prisma/client';
import { Box, Card, Group, Stack, StatLabel, StatRoot, StatValueText } from '@chakra-ui/react';
import { Avatar } from '@/src/components/ui/avatar';

interface TravelerCardProps {
  data: User;
}

export const TravelerCard = ({ data }: TravelerCardProps) => {
  const { fullName, email, avatarUrl, visitedCountriesCount } = data;
  return (
    <Card.Root flexDirection="row" overflow="hidden" w="xl">
      <Avatar m="6" size="2xl" name={fullName || ''} src={avatarUrl || undefined} />
      <Box>
        <Card.Body>
          <Group gap="16">
            <Stack>
              <Card.Title>{fullName}</Card.Title>
              <Card.Description>{email}</Card.Description>
            </Stack>
            <StatRoot pt="2">
              <StatLabel>Countries</StatLabel>
              <StatValueText>{visitedCountriesCount}</StatValueText>
            </StatRoot>
          </Group>
        </Card.Body>
      </Box>
    </Card.Root>
  );
};
