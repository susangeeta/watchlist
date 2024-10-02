/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Slider from "react-slick";
import { fetchSliderMovies } from "../../utils";
import { Skeleton } from "../common";
import MovieCard from "../common/MovieCard";

const MovieSlider = ({ heading, page, setPage, settings, type }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await fetchSliderMovies(page, type);
      setLoading(false);
      if (result?.Response && result?.Search) {
        setData(result.Search);
      }
    })();
  }, [page, type]);

  return (
    <div className="flex items-center gap-8 flex-col justify-center">
      <div className=" w-full flex flex-col gap-4 lg:gap-6 p-2 custom-container ">
        <div className="flex justify-between">
          <h1 className="text-white">{heading}</h1>

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
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="pr-3">
                  <Skeleton />
                </div>
              ))
            : data.map((item, i) => <MovieCard item={item} key={i} />)}
        </Slider>
      </div>
    </div>
  );
};

export default MovieSlider;
