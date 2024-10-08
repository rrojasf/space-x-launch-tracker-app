import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAllLaunches } from "../../hooks/useAllLaunches";

const LaunchCountdown: React.FC = () => {
  const { launchesResponse } = useAllLaunches();
  const [countdown, setCountdown] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const upcomingLaunch = launchesResponse?.docs.find(
      (launch) => launch.upcoming
    );
    if (!upcomingLaunch) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const launchTime = new Date(upcomingLaunch.date_utc).getTime();
      const difference = launchTime - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference > 0) {
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (difference < 0) {
        clearInterval(interval);
        setCountdown("Launched!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchesResponse]);

  return (
    <VStack spacing={2}>
      <HStack spacing={4}>
        <VStack>
          <Text fontSize="4xl" fontWeight="bold">
            {timeLeft.days}
          </Text>
          <Text>Days</Text>
        </VStack>
        <VStack>
          <Text fontSize="4xl" fontWeight="bold">
            {timeLeft.hours}
          </Text>
          <Text>Hours</Text>
        </VStack>
        <VStack>
          <Text fontSize="4xl" fontWeight="bold">
            {timeLeft.minutes}
          </Text>
          <Text>Minutes</Text>
        </VStack>
        <VStack>
          <Text fontSize="4xl" fontWeight="bold">
            {timeLeft.seconds}
          </Text>
          <Text>Seconds</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default LaunchCountdown;
