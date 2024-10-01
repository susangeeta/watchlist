/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";

const MovieContext = createContext(undefined);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const updateMovieDetails = (details) => {
    if (!movies.find((elm) => elm.imdbID === details.imdbID))
      setMovies((prev) => [...prev, details]);
  };

  const updateBulkMovieDetails = (details) => {
    setMovies(details);
  };

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
    throw new Error("useAuth must be used within an MovieProvider");
  }
  return context;
};
