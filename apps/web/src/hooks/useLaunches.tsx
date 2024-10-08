import { getLaunches } from "@space-launch-tracking-app/core";
import { Launch } from "@space-launch-tracking-app/shared-types";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useLaunches = () => {
  const {
    data: launches,
    isLoading,
    error,
  } = useQuery<Launch[]>({
    queryKey: ["launches"],
    queryFn: getLaunches,
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
    refetchOnWindowFocus: false,
  });

  return useMemo(
    () => ({
      launches,
      isLoading,
      error,
    }),
    [launches, isLoading, error],
  );
};
