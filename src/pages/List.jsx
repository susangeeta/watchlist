import Lottie from "react-lottie";
import { animationError } from "../assets/lottie";
import { MovieCard } from "../components/common";
import { Header, ResponsiveNavBar } from "../components/home";
import { useMovie } from "../contexts";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationError,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const List = () => {
  const { movies } = useMovie();
  return (
    <div className="w-full bg-secondary min-h-screen">
      <Header />
      <ResponsiveNavBar />
      <div className="w-full custom-container pt-32 flex flex-col gap-3">
        {movies.length === 0 ? (
          <div className="w-full h-full items-center justify-center">
            <Lottie
              options={defaultOptions}
              height={550}
              width={450}
              className="object-cover"
            />
          </div>
        ) : (
          <h1 className="text-white">List </h1>
        )}
        <div className="grid  grid-cols-2  md:grid-cols-6 gap-2 p-3  lg:gap-5">
          {movies.map((item, i) => (
            <MovieCard item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
