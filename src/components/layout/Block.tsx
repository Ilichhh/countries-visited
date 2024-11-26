import { Box, Heading } from '@chakra-ui/react';

interface BlockProps {
  children: React.ReactNode;
  header?: string;
}

export const Block = ({ children, header }: BlockProps) => {
  return (
    <Box
      p="4"
      w="100%"
      borderWidth="1px"
      borderColor="border.disabled"
      borderRadius="md"
      color="fg.disabled"
    >
      {header && <Heading mb="2">{header}</Heading>}
      {children}
    </Box>
  );
};
