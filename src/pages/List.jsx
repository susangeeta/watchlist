import { MovieCard } from "../components/common";
import { Header } from "../components/home";
import { useMovie } from "../contexts";

const List = () => {
  const { movies } = useMovie();
  return (
    <div className="w-full bg-secondary min-h-screen">
      <Header />
      <div className="w-full custom-container pt-32">
        <div className="grid grid-cols-6 gap-5">
          {movies.map((item, i) => (
            <MovieCard item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
