import { useEffect, useMemo, useRef, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Slider from "react-slick";
import { fetchSliderMovies } from "../../utils";
import CradSkeleton from "../common/CradSkeleton";

const TopRatedMovies = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await fetchSliderMovies(page);
      setLoading(false);
      if (result?.Response && result?.Search) {
        setData(result.Search);
      }
    })();
  }, [page]);

  const settings = useMemo(() => {
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
    <div className="flex items-center gap-8 flex-col justify-center bg-secondary py-4 lg:py-8">
      <div className=" w-full flex flex-col gap-4 lg:gap-6 p-2 custom-container ">
        <div className="flex justify-between">
          <h1 className="text-white">Related Movies</h1>

          <div className=" hidden md:flex gap-3">
            <button
              disabled={page === 1}
              onClick={() => {
                sliderRef.current?.slickPrev();
                if (page >= 1) setPage((pre) => pre - 1);
              }}
              className="bg-[#222028] h-9 w-9 rounded-md flex items-center justify-center text-white"
            >
              <FaLessThan className="text-white text-sm" />
            </button>
            <button
              disabled={page === 100}
              onClick={() => {
                sliderRef.current?.slickNext();
                if (page >= 1) setPage((pre) => pre + 1);
              }}
              className="bg-[#222028] h-9 w-9 rounded-md flex items-center justify-center text-white"
            >
              <FaGreaterThan className="text-white text-sm" />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {data?.map((item, i) => (
            <div key={i} className="group">
              {loading ? (
                <div className="pr-4">
                  <CradSkeleton />
                </div>
              ) : (
                <>
                  <div className=" h-44 lg:!h-64 relative !w-11/12 rounded-xl cursor-pointer !overflow-hidden">
                    <img
                      src={
                        item.Poster !== "N/A"
                          ? item.Poster
                          : "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg" // Default image
                      }
                      className="object-cover h-full w-full"
                    />
                    <div className="bg-primary hover:bg-white hover:text-primary transition-all duration-200 ease-in-out absolute rounded-full top-3 right-3 text-white h-8 w-8 flex items-center justify-center  ">
                      <CiBookmark className="text-xl text-white hover:text-primary  " />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-white p-3 items-center">
                      <h1 className="text-sm truncate w-full">
                        {item.Title.slice(0, 40)}
                      </h1>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRatedMovies;
