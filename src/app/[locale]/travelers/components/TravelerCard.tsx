import { User } from '@prisma/client';
import { Box, Card } from '@chakra-ui/react';
import { Avatar } from '@/src/components/ui/avatar';

interface TravelerCardProps {
  data: User;
}

export const TravelerCard = ({ data }: TravelerCardProps) => {
  const { fullName, email, avatarUrl } = data;
  return (
    <Card.Root flexDirection="row" overflow="hidden" w="xl">
      <Avatar m="6" size="2xl" name={fullName || ''} src={avatarUrl || undefined} />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{fullName}</Card.Title>
          <Card.Description>{email}</Card.Description>
        </Card.Body>
      </Box>
    </Card.Root>
  );
};
