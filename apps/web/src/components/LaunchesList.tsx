import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import LaunchCard from "./LaunchCard";
import { Stack, Button } from "@chakra-ui/react";

const LaunchesList = () => {
  const { launches, favorites } = useAppContext();
  const [filter, setFilter] = useState("all"); // 'all', 'upcoming', 'past'

  // Filter launches based on filter state
  const filteredLaunches = launches.filter((launch) => {
    if (filter === "all") return true;
    if (filter === "upcoming") return launch.upcoming;
    if (filter === "past") return !launch.upcoming;
  });

  const launchesToShow = filter === "favorites" ? favorites : filteredLaunches;

  return (
    <>
      <Stack direction="row" spacing={4} mb={6}>
        <Button
          colorScheme={filter === "all" ? "blue" : "gray"}
          onClick={() => setFilter("all")}
        >
          All Launches
        </Button>
        <Button
          colorScheme={filter === "upcoming" ? "blue" : "gray"}
          onClick={() => setFilter("upcoming")}
        >
          Upcoming
        </Button>
        <Button
          colorScheme={filter === "past" ? "blue" : "gray"}
          onClick={() => setFilter("past")}
        >
          Past
        </Button>

        <Button
          colorScheme={filter === "favorites" ? "blue" : "gray"}
          onClick={() => setFilter("favorites")}
        >
          Favorites
        </Button>
      </Stack>
      {launchesToShow.map((launch) => (
        <LaunchCard launch={launch} key={launch.id} />
      ))}
    </>
  );
};

export default LaunchesList;
