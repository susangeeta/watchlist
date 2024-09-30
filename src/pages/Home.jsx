import {
  Hero,
  TopRatedEpisode,
  TopRatedMovies,
  TopRatedSeries,
} from "../components/home";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopRatedMovies />
      <TopRatedSeries />
      <TopRatedEpisode />
    </div>
  );
};

export default Home;
