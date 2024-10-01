import { useMemo, useState } from "react";
import { MovieSlider } from "../components/common";
import { Footer, Hero } from "../components/home";

const Home = () => {
  const [topRatedMoviePage, setTopRatedMoviePage] = useState(1);
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

  const topRatedSeriesSliderSetting = useMemo(() => {
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
      <Hero />
      <div className="pt-16 bg-secondary">
        <MovieSlider
          heading={"Top Rated Movies"}
          page={topRatedMoviePage}
          setPage={setTopRatedMoviePage}
          settings={topRatedMovieSliderSetting}
        />
      </div>
      <div className="py-12 bg-secondary">
        <MovieSlider
          heading={"Top Rated Series"}
          page={topRatedSeriesPage}
          setPage={setTopRatedSeriesPage}
          settings={topRatedSeriesSliderSetting}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
