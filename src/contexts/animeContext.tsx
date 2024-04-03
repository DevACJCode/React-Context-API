import { ReactNode, createContext, useContext, useState } from "react";

type AnimeContextProps = {
  animes: string[];
  addAnime: (anime: string) => void;
};

export const AnimeContext = createContext({} as AnimeContextProps);

export function AnimeProvider({ children }: { children: ReactNode }) {
  const [animes, setAnimes] = useState<string[]>([
    "One Piece",
    "Naruto",
    "DBZ",
    "Jujutsu",
  ]);

  function addAnime(anime: string): void {
    setAnimes([...animes, anime]);
  }

  return (
    <AnimeContext.Provider
      value={{
        animes: animes,
        addAnime: addAnime,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

export function useAnime() {
  return useContext(AnimeContext);
}
