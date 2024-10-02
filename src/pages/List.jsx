import { useMemo, useState } from "react";
import { MovieCard } from "../components/common";
import { Footer, Header, ResponsiveNavBar } from "../components/home";
import { useMovie } from "../contexts";

const List = () => {
  const { movies } = useMovie();
  const [type, setType] = useState("movie");

  const dataType = useMemo(() => {
    return [
      { id: 1, title: "Movies", value: "movie" },
      { id: 2, title: "Series", value: "series" },
      { id: 3, title: "Episodes", value: "episode" },
    ];
  }, []);

  const filteredMovies = movies.filter((elm) => elm.Type === type);

  return (
    <div className="w-full bg-secondary min-h-screen">
      <Header />
      <ResponsiveNavBar />
      <div className="w-full custom-container pt-20 md:pt-32 flex flex-col h-[calc(100vh-8rem)] overflow-y-scroll hide-scrollbar gap-3">
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

        {!filteredMovies?.length ? (
          <div className="text-white w-full flex items-center justify-center text-xl h-full">
            No data found
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 p-3  lg:gap-5">
            {filteredMovies.map((item, i) => (
              <MovieCard item={item} key={i} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default List;
