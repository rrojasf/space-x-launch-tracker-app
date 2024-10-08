import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const mockTweets = [
  {
    id: 1,
    author: "SpaceX",
    content: "Preparing for the next launch!",
    date: "2h ago",
  },
  {
    id: 2,
    author: "NASA",
    content: "Exciting discoveries from our latest mission!",
    date: "5h ago",
  },
  {
    id: 3,
    author: "Elon Musk",
    content: "The future of space exploration is bright!",
    date: "1d ago",
  },
];

const LatestTweets: React.FC = () => {
  return (
    <VStack spacing={4} align="stretch">
      {mockTweets.map((tweet) => (
        <Box
          key={tweet.id}
          p={4}
          borderWidth={1}
          borderRadius="md"
          borderColor="gray"
        >
          <HStack spacing={3} mb={2}>
            <Avatar size="sm" name={tweet.author} />
            <Text fontWeight="bold">{tweet.author}</Text>
            <Text fontSize="sm" color="space.500">
              {tweet.date}
            </Text>
          </HStack>
          <Text>{tweet.content}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default LatestTweets;
