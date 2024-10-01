import { useDeferredValue, useEffect, useMemo, useState } from "react";

const SearchBar = ({ searchText }) => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("movie");
  const defferedSearch = useDeferredValue(searchText);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(
        `https://omdbapi.com/?apikey=36e67ebf&s=${defferedSearch}&type=${type}&page=1}`
      );
      const result = await response.json();
      console.log(result);
      setLoading(false);

      if (result?.Response && result?.Search) {
        setSearchData(result.Search);
      } else {
        setSearchData([]);
      }
    })();
  }, [defferedSearch, type]);

  const dataType = useMemo(() => {
    return [
      { id: 1, title: "Movies", value: "movie" },
      { id: 2, title: "Series", value: "series" },
      { id: 3, title: "Episodes", value: "episode" },
    ];
  }, []);

  return (
    <div
      className={`bg-primary-light/70 backdrop-blur-md w-full transition-all duration-200 ease-linear rounded-md ${
        searchText ? "h-96 p3" : "h-0"
      } ${searchData.length > 4 ? "overflow-y-scroll" : "overflow-hidden"}`}
    >
      <div className="flex items-center gap-3 p-3">
        {dataType.map((elm) => (
          <div
            key={elm?.imdbID}
            onClick={() => setType(elm?.value)}
            className={`${
              type === elm.value
                ? "bg-secondary/50 border-white/30"
                : "bg-secondary/30 border-transparent"
            } transition-all duration-150 ease-linear rounded-3xl cursor-pointer text-sm border text-white px-4 font-light py-2`}
          >
            {elm?.title}
          </div>
        ))}
      </div>

      {!searchData.length ? (
        <div className="w-full h-[calc(100%-5rem)] flex items-center text-white font-semibold justify-center">
          No Data Found
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {searchData.map((data) => (
            <div
              key={data?.Title}
              className="flex gap-3  bg-secondary/40 rounded-md p-2 cursor-pointer"
            >
              <div>
                <img
                  src={data?.Poster}
                  alt="Poster"
                  className="w-20 h-16 rounded-md object-cover"
                />
              </div>

              <div className="text-white w-[calc(100%-6rem)] flex flex-col gap-2">
                <p className="font-medium truncate">{data?.Title}</p>
                <div className="bg-primary px-2 rounded-md py-1 text-xs w-fit">
                  {data?.Year}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
