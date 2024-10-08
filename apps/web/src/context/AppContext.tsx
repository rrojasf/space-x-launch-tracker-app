import { Launch } from "@space-launch-tracking-app/shared-types";
import React, { createContext, ReactNode, useContext } from "react";
import { useAllLaunches } from "../hooks/useAllLaunches";
import { useFavorites } from "../hooks/useFavorites";

interface AppContextType {
  launches: Launch[];
  favorites: Launch[];
  loading: boolean;
  error: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const {
    launchesResponse,
    isLoading: isLoadingLaunches,
    error: errorLaunches,
  } = useAllLaunches();

  const launches = launchesResponse?.docs || [];
  const { favorites } = useFavorites();
  const favoriteLaunches = launches?.filter((launch) =>
    favorites.includes(launch.id)
  );

  return (
    <AppContext.Provider
      value={{
        launches: launches || [],
        loading: isLoadingLaunches,
        error: errorLaunches,
        favorites: favoriteLaunches || [],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
