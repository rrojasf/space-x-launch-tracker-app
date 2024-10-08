import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LaunchesList from "../components/LaunchesList";

const LaunchesPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter");
    if (filterParam && ["all", "upcoming", "past"].includes(filterParam)) {
      setFilter(filterParam);
    }
  }, [location]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    navigate(`/launches?filter=${newFilter}`);
  };

  return (
    <Box>
      <Heading mb={6}>Launches</Heading>
      <LaunchesList filter={filter} onFilterChange={handleFilterChange} />
    </Box>
  );
};

export default LaunchesPage;
