import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useAppContext } from '../context/AppContext';
import { Launch } from '@space-launch-tracking-app/shared-types';

export const FeaturedLaunch: React.FC = () => {
  const { launches, loading } = useAppContext();

  if (loading) {
    return <Box>Loading featured launch...</Box>;
  }

  const upcomingLaunch = launches.find((launch: Launch) => new Date(launch.date_utc) > new Date());

  if (!upcomingLaunch) {
    return <Box>No upcoming launches found.</Box>;
  }

  return (
    <Box borderWidth={1} borderRadius="lg" p={6}>
      <Heading size="lg" mb={2}>Next Launch: {upcomingLaunch.name}</Heading>
      <Text mb={2}>Date: {new Date(upcomingLaunch.date_utc).toLocaleString()}</Text>
      <Text mb={4}>{upcomingLaunch.details}</Text>
      <Button colorScheme="blue">More Details</Button>
    </Box>
  );
};