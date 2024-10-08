import { Button, Flex, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { LAUNCHES_PER_PAGE } from "../const";
import { useAppContext } from "../context/AppContext";
import { usePagination } from "../hooks/usePagination";
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

  const filteredLaunches = launches.filter((launch) => {
    if (filter === "all") return true;
    if (filter === "upcoming") return launch.upcoming;
    if (filter === "past") return !launch.upcoming;
    if (filter === "favorites") return favorites.includes(launch.id);
    return true;
  });

  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination({
      items: filteredLaunches,
      itemsPerPage: LAUNCHES_PER_PAGE,
    });

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
        {currentItems.map((launch) => (
          <LaunchCard launch={launch} key={launch.id} />
        ))}
      </VStack>

      <Flex justifyContent="center" mt={6}>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            mx={1}
            onClick={() => setCurrentPage(i + 1)}
            colorScheme={currentPage === i + 1 ? "blue" : "gray"}
          >
            {i + 1}
          </Button>
        ))}
      </Flex>
    </>
  );
};

export default LaunchesList;
