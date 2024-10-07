import React from 'react';
import { Flex, Button } from '@chakra-ui/react';

export const Navigation: React.FC = () => {
  return (
    <Flex as="nav" justify="center" mb={8}>
      <Button mx={2}>Home</Button>
      <Button mx={2}>Launches</Button>
      <Button mx={2}>About</Button>
    </Flex>
  );
};
