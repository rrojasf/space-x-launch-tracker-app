import React from 'react';
import { Box, Container, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box bg={bgColor} color={textColor}>
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2024 SpaceX Launch Tracking App.</Text>
        <Stack direction="row" spacing={6}>
          <Link href="https://www.spacex.com/" isExternal>
            SpaceX Official
          </Link>
          <Link href="https://www.nasa.gov/" isExternal>
            NASA
          </Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Container>
    </Box>
  );
};