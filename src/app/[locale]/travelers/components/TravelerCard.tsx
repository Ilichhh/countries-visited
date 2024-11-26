import { Flex, Group, Heading, Image, Stack, Table, Text } from '@chakra-ui/react';
import { Avatar } from '@/src/components/ui/avatar';
import { useRouter } from '@/src/i18n/routing';
import { UserWithTripsAndCountries } from '@/prisma/types';
import { Tooltip } from '@/src/components/ui/tooltip';

interface TravelerCardProps {
  data: UserWithTripsAndCountries;
  i: number;
}

export const TravelerCard = ({ data, i }: TravelerCardProps) => {
  const { fullName, username, avatarUrl, visitedCountries, residentCountry, trips } = data;
  const router = useRouter();

  // удалить после добавления логики
  const ruFlag = visitedCountries.find((country) => country.cca2 === 'RU')?.flagUrl;

  const handleRowClick = () => {
    router.push(`/${username}`);
  };

  return (
    <Table.Row onClick={handleRowClick} cursor="pointer">
      <Table.Cell>{`${i}.`}</Table.Cell>
      <Table.Cell>
        <Group gap="4">
          <Avatar size="2xl" name={fullName} src={avatarUrl || undefined} />
          <Stack gap="1.5" w="200px">
            <Flex gap="2" alignItems="center">
              <Heading>{fullName}</Heading>
              {(residentCountry?.flagUrl || ruFlag) && (
                <Tooltip
                  showArrow
                  content={`From ${residentCountry?.name}`}
                  positioning={{ placement: 'top' }}
                  openDelay={100}
                  closeDelay={100}
                >
                  <Image
                    display="inline"
                    src={residentCountry?.flagUrl || ruFlag || undefined}
                    alt={residentCountry?.name}
                    height="18px"
                    width="24px"
                  ></Image>
                </Tooltip>
              )}
            </Flex>
            <Text color="fg.muted">{username}</Text>
          </Stack>
        </Group>
      </Table.Cell>
      <Table.Cell>{visitedCountries.length}</Table.Cell>
      <Table.Cell>{trips.length}</Table.Cell>
    </Table.Row>
  );
};
