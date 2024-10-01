import { useEffect, useMemo, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Slider from "react-slick";
import { fetchSeriesSlider } from "../../utils";

const TopRatedMovies = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [lodaing, setLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await fetchSeriesSlider(page);
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
    <div className="flex items-center gap-8 flex-col justify-center bg-secondary pb-4 lg:pb-8">
      <div className=" w-full flex flex-col gap-4 lg:gap-6 p-2 custom-container ">
        <div className="flex justify-between">
          <h1 className="text-white">Top Rated Series</h1>

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
            <div key={i} className="group ">
              <div className=" h-64 md:!h-64 relative cursor-pointer !w-11/12 rounded-xl !overflow-hidden">
                <img
                  src={item.Poster}
                  className="w-full h-full !object-cover "
                />
                <div className="bg-primary absolute top-0 right-0 text-white px-2 py-1">
                  <h1 className="text-sm">{item.Year}</h1>
                </div>
                <div className="absolute h-full w-full bg-black/75 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <button className="rounded-full h-9 w-9 bg-primary flex items-center transition-all duration-500 ease-in-out justify-center hover:bg-white">
                    <CiHeart className="text-xl text-white hover:text-primary" />
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-white p-3 items-center">
                  <h1 className="text-sm truncate w-full">
                    {item.Title.slice(0, 40)}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRatedMovies;
