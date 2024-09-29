import { useEffect, useState } from "react";
import { fetchSliderMovies } from "../../utils";

const TopRatedMovies = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchSliderMovies(page);

      if (result?.Response && result?.Search) {
        setData(result.Search);
      }
    })();
  }, [page]);

  console.log(data);

  return (
    <div className="flex items-center gap-8 flex-col justify-center bg-secondary pb-12">
      <div className=" w-full flex flex-col gap-8 custom-container ">
        <div className="flex justify-between bg-[#282841] p-3 rounded-md ">
          <h1 className="text-lg font-semibold text-white"> Movies</h1>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {data?.map((item, i) => (
            <div key={i} className="">
              <div className="!h-96 relative !w-[95%] rounded-xl !overflow-hidden">
                <img
                  src={item.Poster}
                  className="w-full h-full !object-cover"
                />
                <div className="bg-primary absolute top-0 right-0 text-white px-2 py-1">
                  <h1 className="text-sm">{item.Year}</h1>
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
