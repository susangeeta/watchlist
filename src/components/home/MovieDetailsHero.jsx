import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const MovieDetailsHero = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <div className="w-full bg-secondary overflow-hidden">
      <div className="w-full h-[calc(100vh-7.8rem)] flex justify-center pt-32 custom-container">
        <div className="flex gap-6 w-4/5 h-full">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-white">
              Loading please wait...
            </div>
          ) : (
            <>
              <div className="rounded-lg border-4 sticky top-0 border-white/30 w-[26rem] h-[32rem] overflow-hidden">
                <img
                  src={movieDetails?.Poster}
                  alt="poster"
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="w-[calc(100%-16rem)] h-full overflow-y-scroll pb-10 hide-scrollbar text-white flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">
                  {movieDetails?.Title}
                </h1>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((elm, i) => (
                    <div className="text-yellow-500" key={i}>
                      {movieDetails?.imdbRating / 2 < i ? (
                        <FaRegStar />
                      ) : (
                        <FaStar />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-5 text-sm font-light text-white/60">
                  <p>{movieDetails?.Year}</p>
                  <div className="w-[2px] h-4 bg-white/60"></div>
                  <p>{movieDetails?.Runtime}</p>
                  <div className="w-[2px] h-4 bg-white/60"></div>
                  <p>{movieDetails?.Rated}</p>
                  <div className="w-[2px] h-4 bg-white/60"></div>
                  <p>{movieDetails?.Genre}</p>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <h2 className="text-2xl text-white/90 font-semibold">
                    Overview
                  </h2>
                  <div className="text-white/80 border-b border-white/30 pb-5">
                    {movieDetails?.Plot}
                  </div>

                  <div className="flex gap-12 text-sm">
                    <div className="flex flex-col gap-2">
                      <p className="text-white/70">Directed By</p>
                      <p className="text-white/70">Written By</p>
                      <p className="text-white/70">Actors</p>
                      <p className="text-white/70">Language</p>
                      <p className="text-white/70">Country</p>
                      <p className="text-white/70">Awards</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <p>{movieDetails?.Director}</p>
                      <p>{movieDetails?.Writer}</p>
                      <p>{movieDetails?.Actors}</p>
                      <p>{movieDetails?.Language}</p>
                      <p>{movieDetails?.Country}</p>
                      <p>{movieDetails?.Awards}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex flex-col gap-2">
                  <h2 className="text-lg text-white/90 font-semibold">
                    Ratings
                  </h2>
                  <div className="flex items-center gap-10">
                    {movieDetails?.Ratings?.map((elm) => (
                      <div key={elm?.Source}>
                        <p className="text-lg text-orange-500 font-semibold">
                          {elm?.Value}
                        </p>
                        <p className="text-xs text-white/60">{elm?.Source}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHero;
