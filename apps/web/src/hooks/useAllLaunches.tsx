import { getAllLaunches } from "@space-launch-tracking-app/core";
import { LaunchResponse } from "@space-launch-tracking-app/shared-types";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useAllLaunches = () => {
  const {
    data: launchesResponse,
    isLoading,
    error,
  } = useQuery<LaunchResponse, Error>({
    queryKey: ["allLaunches"],
    queryFn: getAllLaunches,
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
    refetchOnWindowFocus: false,
  });

  return useMemo(
    () => ({
      launchesResponse,
      isLoading,
      error,
    }),
    [launchesResponse, isLoading, error]
  );
};
