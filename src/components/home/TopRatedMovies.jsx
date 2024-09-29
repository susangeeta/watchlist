import { useEffect, useMemo, useRef, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Slider from "react-slick";
import { fetchSliderMovies } from "../../utils";

const TopRatedMovies = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    (async () => {
      const result = await fetchSliderMovies(page);

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
    };
  }, []);

  return (
    <div className="flex items-center gap-8 flex-col justify-center bg-secondary py-16">
      <div className=" w-full flex flex-col gap-6 custom-container ">
        <div className="flex justify-between">
          <h1 className="text-white">Top Rated Movies</h1>

          <div className="flex gap-3">
            <button
              disabled={page === 1}
              onClick={() => {
                sliderRef.current?.slickPrev();
                if (page >= 1) setPage((pre) => pre - 1);
              }}
            >
              <FaLessThan className="text-white text-sm" />
            </button>
            <button
              disabled={page === 100}
              onClick={() => {
                sliderRef.current?.slickNext();
                if (page >= 1) setPage((pre) => pre + 1);
              }}
            >
              <FaGreaterThan className="text-white text-sm" />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {data?.map((item, i) => (
            <div key={i} className="">
              <div className="!h-64 relative !w-11/12 rounded-xl !overflow-hidden">
                <img
                  src={item.Poster}
                  className="w-full h-full !object-cover"
                />
                <div className="bg-primary absolute top-0 right-0 text-white px-2 py-1">
                  <h1 className="text-sm">{item.Year}</h1>
                </div>

                <div className="rounded-full bg-primary h-10 w-10">{}</div>
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
