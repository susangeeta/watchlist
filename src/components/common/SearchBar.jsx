import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchText, setSearchText }) => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("movie");
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(searchText, 300);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(
        `https://omdbapi.com/?apikey=36e67ebf&s=${debouncedSearch}&type=${type}&page=1`
      );
      const result = await response.json();
      setLoading(false);

      if (result?.Response && result?.Search) {
        setSearchData(result.Search);
      } else {
        setSearchData([]);
      }
    })();
  }, [debouncedSearch, type]);

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
      } ${
        searchData.length > 4
          ? "overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded"
          : "overflow-hidden"
      }`}
    >
      <div className="flex items-center gap-3 p-3">
        {dataType.map((elm) => (
          <div
            key={elm?.id}
            onClick={() => setType(elm?.value)}
            className={`${
              type === elm.value
                ? "bg-secondary/50 border-white/30"
                : "bg-secondary/30 border-transparent"
            } transition-all duration-150 ease-linear rounded-lg cursor-pointer text-sm border text-white px-4 font-light py-2`}
          >
            {elm?.title}
          </div>
        ))}
      </div>

      {loading || !searchData.length ? (
        loading ? (
          <div className="w-full h-[calc(100%-5rem)] flex items-center text-white font-semibold justify-center">
            Loading...
          </div>
        ) : (
          <div className="w-full h-[calc(100%-5rem)] flex items-center text-white font-semibold justify-center">
            No Data Found
          </div>
        )
      ) : (
        <div className="flex flex-col gap-3 p-2">
          {searchData.map((data) => (
            <div
              onClick={() => {
                navigate(`/details/${data.imdbID}`);
                setSearchText("");
              }}
              key={data?.Title}
              className="flex gap-3   bg-secondary/40 rounded-md p-3 cursor-pointer"
            >
              <div>
                <img
                  src={data?.Poster}
                  alt="Poster"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              <div className="text-white w-[calc(100%-6rem)] flex flex-col gap-1">
                <p className="font-medium text-sm">{data?.Title}</p>
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
