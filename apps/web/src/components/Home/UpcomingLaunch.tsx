import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useAllLaunches } from "../../hooks/useAllLaunches";

const UpcomingLaunch: React.FC = () => {
  const { launchesResponse, isLoading, error } = useAllLaunches();

  if (isLoading) return <Text>Loading upcoming launch...</Text>;
  if (error) return <Text>Error loading upcoming launch</Text>;

  const upcomingLaunch = launchesResponse?.docs.findLast(
    (launch) => launch.upcoming,
  );

  if (!upcomingLaunch) return <Text>No upcoming launches found</Text>;

  return (
    <VStack align="start" spacing={2}>
      <Text fontSize="2xl" fontWeight="bold">
        {upcomingLaunch.name}
      </Text>
      <Text>
        Date: {new Date(upcomingLaunch.date_utc).toLocaleDateString()}
      </Text>
      <Text>Mission: {upcomingLaunch.details || "Details not available"}</Text>
    </VStack>
  );
};

export default UpcomingLaunch;
