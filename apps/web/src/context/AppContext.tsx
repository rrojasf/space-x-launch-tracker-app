import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Launch } from '@space-launch-tracking-app/shared-types';
import { getLaunches } from '@space-launch-tracking-app/core';

interface AppContextType {
  launches: Launch[];
  setLaunches: React.Dispatch<React.SetStateAction<Launch[]>>;
  loading: boolean;
  error: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const data = await getLaunches();
        setLaunches(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch launches');
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  return (
    <AppContext.Provider value={{ launches, setLaunches, loading, error }}>
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