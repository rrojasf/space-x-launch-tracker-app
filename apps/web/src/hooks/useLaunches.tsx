import { useQuery } from '@tanstack/react-query';
import { getLaunches } from '@space-launch-tracking-app/core';
import { Launch } from '@space-launch-tracking-app/shared-types';

export const useLaunches = () => {
  const { data: launches, isLoading, error } = useQuery<Launch[]>({
    queryKey: ['launches'],
    queryFn: getLaunches,
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
    refetchOnWindowFocus: false,
  });

  return {
    launches,
    isLoading,
    error,
  };
};
