import {
  Hero,
  TopRatedEpisode,
  TopRatedMovies,
  TopRatedSeries,
} from "../components/home";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopRatedMovies />
      <TopRatedSeries />
      <TopRatedEpisode />
      <Footer />
    </div>
  );
};

export default Home;
