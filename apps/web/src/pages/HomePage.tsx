import React from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';
import { RecentLaunches } from '../components/RecentLaunches';
import { FeaturedLaunch } from '../components/FeaturedLaunch';
import { LatestTweets } from '../components/LatestTweets';
import { Navigation } from '../components/Navigation';

export const HomePage: React.FC = () => {
  return (
    <Box margin="0 auto" padding={4}>
      <VStack spacing={8}>
        <Heading as="h1" textAlign="center">
          Space Launch Tracker
        </Heading>
        <Navigation />
        <FeaturedLaunch />
        <RecentLaunches />
        <LatestTweets />
      </VStack>
    </Box>
  );
};