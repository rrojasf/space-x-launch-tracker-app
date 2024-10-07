import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

// Mock tweet data (replace with actual API call in production)
const mockTweets = [
  { id: '1', text: 'Excited for our next launch!' },
  { id: '2', text: 'Check out the latest images from our recent mission.' },
  { id: '3', text: 'SpaceX is hiring! Visit our careers page for more info.' },
];

export const LatestTweets: React.FC = () => {
  return (
    <Box>
      <Heading size="md" mb={4}>Latest SpaceX Tweets</Heading>
      <VStack align="stretch" spacing={4}>
        {mockTweets.map((tweet) => (
          <Box key={tweet.id} borderWidth={1} borderRadius="lg" p={4}>
            <Text>{tweet.text}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};