import React from "react";
import { Footer, MovieDetailsHero, RelatedMovieCard } from "../components/home";

const MovieDetails = () => {
  return (
    <div>
      <MovieDetailsHero />
      <RelatedMovieCard />
      <Footer />
    </div>
  );
};

export default MovieDetails;
