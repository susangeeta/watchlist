import { MovieCard } from "../components/common";
import { Footer, Header, ResponsiveNavBar } from "../components/home";
import { useMovie } from "../contexts";

const List = () => {
  const { movies } = useMovie();
  return (
    <div className="w-full bg-secondary min-h-screen">
      <Header />
      <ResponsiveNavBar />
      <div className="w-full custom-container pt-32 flex flex-col  md:h-[32rem] lg:h-[45rem] 2xl:h[42rem] gap-3">
        <div className="grid  grid-cols-2  md:grid-cols-6 gap-2 p-3  lg:gap-5">
          {movies.map((item, i) => (
            <MovieCard item={item} key={i} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default List;
