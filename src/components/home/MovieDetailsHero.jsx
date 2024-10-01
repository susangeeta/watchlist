import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ResponsiveNavBar from "./ResponsiveNavbar";

const MovieDetailsHero = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch movie details using the ID
    const fetchMovieDetails = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=36e67ebf`
      );
      const data = await response.json();
      setMovieDetails(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  console.log(movieDetails);

  return (
    <div className="w-full overflow-hidden">
      <Header />
      <ResponsiveNavBar />
      <div>
        {loading ? (
          <div className="h-[28rem] lg:h-[35rem] w-full animate-pulse bg-slate-500"></div>
        ) : (
          <section className="h-[28rem] lg:h-[35rem] w-full">
            <div
              className="flex h-full w-full bg-no-repeat object-contain bg-cover relative"
              style={{
                backgroundImage: `url(${
                  movieDetails.Poster !== "N/A"
                    ? movieDetails.Poster
                    : "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
                })`,
              }}
            >
              <div className="z-10 absolute inset-0 w-full h-full bg-gradient-to-r from-black/95 via-black/60 to-black/10 bg-blend-overlay"></div>
              <div className="grid  md:grid-cols-2 custom-container z-20">
                <div className="flex flex-col gap-2 lg:gap-3 md:gap-3 justify-center p-4 md:p-0">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <div className="px-2 py-1 bg-primary w-fit rounded-md">
                      {movieDetails?.imdbRating !== "N/A"
                        ? movieDetails?.imdbRating
                        : "4.5"}
                    </div>
                    <p>On IMDb</p>
                  </div>
                  <h1 className="text-white/90 font-semibold text-2xl md:text-2xl">
                    {movieDetails?.Title}
                  </h1>
                  <p className="text-white/90 text-sm md:text-base leading-6">
                    {movieDetails?.Plot !== "N/A"
                      ? movieDetails?.Plot
                      : "Lang Lang Plays Disney showcases pianist Lang Lang’s brilliant renditions of classic Disney songs. Featuring pieces from The Lion King, Beauty and the Beast, and Frozen, the album blends his expert technique with the magic of Disney"}
                  </p>
                  <div className="flex items-center gap-3 mt-2 lg:mt-3">
                    <button className="bg-white font-medium py-2 rounded-md w-fit px-4">
                      Add to wishlist
                    </button>
                    <button className="bg-secondary text-white border border-slate-500 font-medium py-2 rounded-md w-fit px-4">
                      {movieDetails?.Year !== "N/A"
                        ? movieDetails?.Year
                        : " 2024"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsHero;
