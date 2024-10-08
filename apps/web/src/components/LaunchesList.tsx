import { Button, Flex, Stack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import LaunchCard from "./LaunchCard";

interface LaunchesListProps {
  filter: string;
  onFilterChange?: (filter: string) => void;
}

const LaunchesList: React.FC<LaunchesListProps> = ({
  filter,
  onFilterChange,
}) => {
  const { launches, favorites } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const launchesPerPage = 10;

  const filteredLaunches = launches.filter((launch) => {
    if (filter === "all") return true;
    if (filter === "upcoming") return launch.upcoming;
    if (filter === "past") return !launch.upcoming;
    if (filter === "favorites") return favorites.includes(launch.id);
    return true;
  });

  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = filteredLaunches.slice(
    indexOfFirstLaunch,
    indexOfLastLaunch
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {filter !== "favorites" && (
        <Stack direction="row" spacing={4} mb={6}>
          {["all", "upcoming", "past"].map((f) => (
            <Button
              key={f}
              colorScheme={filter === f ? "blue" : "gray"}
              onClick={() => onFilterChange && onFilterChange(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </Stack>
      )}

      <VStack spacing={6} align="stretch">
        {currentLaunches.map((launch) => (
          <LaunchCard launch={launch} key={launch.id} />
        ))}
      </VStack>

      <Flex justifyContent="center" mt={6}>
        {Array.from(
          { length: Math.ceil(filteredLaunches.length / launchesPerPage) },
          (_, i) => (
            <Button
              key={i}
              mx={1}
              onClick={() => paginate(i + 1)}
              colorScheme={currentPage === i + 1 ? "blue" : "gray"}
            >
              {i + 1}
            </Button>
          )
        )}
      </Flex>
    </>
  );
};

export default LaunchesList;
