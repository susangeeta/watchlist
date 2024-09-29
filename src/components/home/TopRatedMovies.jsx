import { useEffect, useMemo, useRef, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Slider from "react-slick";
import { fetchSliderMovies } from "../../utils";

const TopRatedMovies = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);
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

  console.log(data);

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      pauseOnHover: false,
      arrows: false,
      beforeChange: (current, next) => setCurrentIndex(next),
    };
  }, []);

  const handlePrevSlide = () => sliderRef.current?.slickPrev();
  const handleNextSlide = () => sliderRef.current?.slickNext();

  return (
    <div className="flex items-center gap-8 flex-col justify-center bg-secondary py-16">
      <div className=" w-full flex flex-col gap-8 custom-container ">
        <div className="flex justify-between bg-[#282841] p-3 rounded-md ">
          <h1 className="text-lg font-semibold text-white">Top Rated Movies</h1>

          <div className="flex gap-3">
            <button onClick={handlePrevSlide}>
              <FaLessThan className="text-white text-sm" />
            </button>
            <button onClick={handleNextSlide}>
              <FaGreaterThan className="text-white text-sm" />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {data?.map((item, i) => (
            <div key={i} className="">
              <div className="!h-64 relative !w-[95%] rounded-xl !overflow-hidden">
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
                  <div className="flex flex-col">
                    <h1 className=" 2xl:text-sm">{item.Title}</h1>
                  </div>
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
