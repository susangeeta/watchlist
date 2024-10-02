/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";

const MovieContext = createContext(undefined);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const updateMovieDetails = (details) => {
    setMovies((prev) => {
      if (!prev.some((movie) => movie.imdbID === details.imdbID)) {
        return [...prev, details];
      }
      return prev;
    });
  };

  const updateBulkMovieDetails = setMovies;

  const contextValue = useMemo(
    () => ({
      movies,
      updateMovieDetails,
      updateBulkMovieDetails,
    }),
    [movies]
  );

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovie must be used within a MovieProvider");
  }
  return context;
};
