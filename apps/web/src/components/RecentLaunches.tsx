import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useAppContext } from '../context/AppContext';
import { Launch } from '@space-launch-tracking-app/shared-types';

export const RecentLaunches: React.FC = () => {
  const { launches, loading } = useAppContext();

  if (loading) {
    return <Box>Loading recent launches...</Box>;
  }

  const recentLaunches = launches
    .filter((launch: Launch) => new Date(launch.date_utc) <= new Date())
    .slice(0, 3);

  return (
    <Box>
      <Heading size="md" mb={4}>Recent Launches</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={4}>
        {recentLaunches.map((launch: Launch) => (
          <Box key={launch.id} borderWidth={1} borderRadius="lg" p={4}>
            <Heading size="sm" mb={2}>{launch.name}</Heading>
            <Text>Date: {new Date(launch.date_utc).toLocaleDateString()}</Text>
            <Text>Status: {launch.success ? 'Success' : 'Failure'}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};