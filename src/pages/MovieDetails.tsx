import React from "react";
import {
  Footer,
  Header,
  MovieDetailsHero,
  ResponsiveNavBar,
} from "../components/home";

const MovieDetails = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <ResponsiveNavBar />
      <MovieDetailsHero />
      <Footer />
    </div>
  );
};

export default MovieDetails;
