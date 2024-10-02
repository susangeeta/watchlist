import React, { useMemo, useState } from "react";
import { MovieSlider } from "../components/common";
import { Footer, MovieDetailsHero } from "../components/home";

const MovieDetails = () => {
  const [topRatedSeriesPage, setTopRatedSeriesPage] = useState(1);

  const topRatedMovieSliderSetting = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 5,
      pauseOnHover: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1536,
          settings: {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },

        {
          breakpoint: 1280,
          settings: {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 760,
          settings: {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
      ],
    };
  }, []);
  return (
    <div>
      <MovieDetailsHero />

      <div className=" pb-4 lg:py-8 bg-secondary">
        <MovieSlider
          heading={"Related Movies"}
          page={topRatedSeriesPage}
          setPage={setTopRatedSeriesPage}
          settings={topRatedMovieSliderSetting}
        />
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetails;
