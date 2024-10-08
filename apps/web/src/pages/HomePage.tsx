import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import LatestTweets from "../components/Home/LatestTweets";
import LaunchCountdown from "../components/Home/LaunchCountdown";
import LaunchPreviewList from "../components/Home/LaunchPreviewList";
import UpcomingLaunch from "../components/Home/UpcomingLaunch";

const HomePage: React.FC = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        color="black"
        py={16}
        borderWidth={1}
        borderRadius="md"
        borderColor="gray"
      >
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={8}
            alignItems="center"
          >
            <GridItem>
              <VStack align="start" spacing={4}>
                <Heading as="h1" size="2xl">
                  Next Launch
                </Heading>
                <UpcomingLaunch />
              </VStack>
            </GridItem>
            {isLargeScreen && (
              <GridItem>
                <Box
                  h="300px"
                  borderWidth={1}
                  borderRadius="md"
                  borderColor="gray"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <LaunchCountdown />
                </Box>
              </GridItem>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={16}>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
          <GridItem>
            <VStack align="stretch" spacing={8}>
              <Heading as="h2" size="xl">
                Upcoming Launches
              </Heading>
              <LaunchPreviewList />
              <Button
                as={RouterLink}
                to="/launches"
                colorScheme="yellow"
                size="lg"
              >
                View All Launches
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="stretch" spacing={8}>
              <Heading as="h2" size="xl">
                Recent Tweets
              </Heading>
              <LatestTweets />
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
