import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Launch } from "@space-launch-tracking-app/shared-types";
import React from "react";
import { useAppContext } from "../context/AppContext";
import InfoBox from "./InfoBox";

interface LaunchCardProps {
  launch: Launch;
}

const fallbackSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="100"
    height="100"
  >
    <path d="M8.566 17.842c-.945 2.462-3.678 4.012-6.563 4.161.139-2.772 1.684-5.608 4.209-6.563l.51.521c-1.534 1.523-2.061 2.765-2.144 3.461.704-.085 2.006-.608 3.483-2.096l.505.516zm-1.136-11.342c-1.778-.01-4.062.911-5.766 2.614-.65.649-1.222 1.408-1.664 2.258 1.538-1.163 3.228-1.485 5.147-.408.566-1.494 1.32-3.014 2.283-4.464zm5.204 17.5c.852-.44 1.61-1.013 2.261-1.664 1.708-1.706 2.622-4.001 2.604-5.782-1.575 1.03-3.125 1.772-4.466 2.296 1.077 1.92.764 3.614-.399 5.15zm11.312-23.956c-.428-.03-.848-.044-1.261-.044-9.338 0-14.465 7.426-16.101 13.009l4.428 4.428c5.78-1.855 12.988-6.777 12.988-15.993v-.059c-.002-.437-.019-.884-.054-1.341zm-5.946 7.956c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
  </svg>
);

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const { isFavorite, toggleFavorite } = useAppContext();
  const launchpadName =
    typeof launch.launchpad === "string"
      ? launch.launchpad
      : launch.launchpad?.name;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      _hover={{
        boxShadow: "xl",
        cursor: "pointer",
        transform: "scale(1.02)",
        transition: "0.3s ease-in-out",
      }}
    >
      <Box
        maxW={{ base: "100%", sm: "300px" }}
        w="300px"
        h="300px"
        bg="gray.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {launch.links.patch.small ? (
          <Image
            objectFit="cover"
            src={launch.links.patch.small}
            alt={launch.name}
          />
        ) : (
          // Fallback content when image is not available
          <Box textAlign="center">{fallbackSvg}</Box>
        )}
      </Box>
      <Stack>
        <CardBody>
          <Heading size="md">{launch.name}</Heading>
          <HStack py={4} gap={8}>
            <InfoBox label="Mision" text={launch.name} />
            <InfoBox
              label="Date"
              text={
                new Date(launch.date_utc).toLocaleDateString() +
                " " +
                new Date(launch.date_utc).toLocaleTimeString()
              }
            />
            <InfoBox label="Launchpad" text={launchpadName} />
            <InfoBox
              label="Status"
              text={
                launch.upcoming ? (
                  <Badge colorScheme="blue">Upcoming</Badge>
                ) : (
                  <Badge colorScheme={launch.success ? "green" : "red"}>
                    {launch.success ? "Success" : "Failure"}
                  </Badge>
                )
              }
            />
          </HStack>
        </CardBody>
        <CardFooter>
          <Button
            mt={2}
            onClick={() => toggleFavorite(launch.id)}
            colorScheme={isFavorite(launch.id) ? "yellow" : "gray"}
          >
            {isFavorite(launch.id)
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default LaunchCard;
