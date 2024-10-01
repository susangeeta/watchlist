import {
  Footer,
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
      {/* <MovieCard title="Top Rated Movies" />
      <MovieCard title="Top Rated Series" />
      <MovieCard title="Top Rated Episode" /> */}
      <Footer />
    </div>
  );
};

export default Home;
