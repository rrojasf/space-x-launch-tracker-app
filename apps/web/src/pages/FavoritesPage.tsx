import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import LaunchesList from "../components/LaunchesList";

const FavoritesPage: React.FC = () => {
  return (
    <Box>
      <Heading mb={6}>Favorite Launches</Heading>
      <LaunchesList filter="favorites" />
    </Box>
  );
};

export default FavoritesPage;
