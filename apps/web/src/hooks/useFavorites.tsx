import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites) as string[]);
    }
  }, []);

  const toggleFavorite = (launchId: string) => {
    const newFavorites = favorites.includes(launchId)
      ? favorites.filter((id) => id !== launchId)
      : [...favorites, launchId];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (launchId: string) => favorites.includes(launchId);

  return { favorites, toggleFavorite, isFavorite };
};
