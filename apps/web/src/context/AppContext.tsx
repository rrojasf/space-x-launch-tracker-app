import React, { createContext, useContext, ReactNode } from 'react';
import { Launch } from '@space-launch-tracking-app/shared-types';
import { useLaunches } from '../hooks/useLaunches';

interface AppContextType {
  launches: Launch[];
  loading: boolean;
  error: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { launches, isLoading: isLoadingLaunches, error: errorLaunches } = useLaunches();

  return (
    <AppContext.Provider value={{ launches: launches || [], loading: isLoadingLaunches, error: errorLaunches }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};