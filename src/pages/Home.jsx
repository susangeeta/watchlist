import { MovieCard } from "../components/common";
import { Hero } from "../components/home";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <MovieCard title="Top Rated Movies" />
      <MovieCard title="Top Rated Series" />
      <MovieCard title="Top Rated Episode" />
      <Footer />
    </div>
  );
};

export default Home;
