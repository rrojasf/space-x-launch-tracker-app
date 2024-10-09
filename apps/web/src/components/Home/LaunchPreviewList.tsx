import { Badge, Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useAllLaunches } from "../../hooks/useAllLaunches";

const LaunchPreviewList: React.FC = () => {
  const { launchesResponse, isLoading, error } = useAllLaunches();

  if (isLoading) return <Text>Loading launches...</Text>;
  if (error)
    return <Text>Error loading launches. Please try again later.</Text>;

  const launches = launchesResponse?.docs.slice(0, 5) || [];

  return (
    <VStack spacing={4} align="stretch">
      {launches.map((launch) => (
        <Box
          key={launch.id}
          p={4}
          borderWidth={1}
          borderRadius="md"
          borderColor="space.200"
        >
          <Text fontSize="lg" fontWeight="bold">
            {launch.name}
          </Text>
          <Text>Date: {new Date(launch.date_utc).toLocaleDateString()}</Text>
          <Badge
            colorScheme={
              launch.upcoming ? "blue" : launch.success ? "green" : "red"
            }
          >
            {launch.upcoming
              ? "Upcoming"
              : launch.success
                ? "Success"
                : "Failure"}
          </Badge>
        </Box>
      ))}
    </VStack>
  );
};

export default React.memo(LaunchPreviewList);
