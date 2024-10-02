/* eslint-disable react/prop-types */
import { CiBookmark } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth, useMovie } from "../../contexts";

const MovieCard = ({ item }) => {
  const { updateBulkMovieDetails, movies, updateMovieDetails } = useMovie();
  const { user } = useAuth();
  const navigate = useNavigate();
  const isMovieExist = movies.some((elm) => elm.imdbID === item.imdbID);

  const handleListSession = (id) => {
    const isMovieExist = movies.some((elm) => elm.imdbID === item.imdbID);
    if (isMovieExist) {
      const filterdMovies = movies.filter((elm) => elm.imdbID !== id);
      console.log(filterdMovies, "filterdMovies");
      updateBulkMovieDetails(filterdMovies);
    } else {
      updateMovieDetails(item);
    }
  };

  return (
    <div className="w-full">
      <div className=" h-44 lg:!h-64 relative !w-11/12 group rounded-xl cursor-pointer !overflow-hidden">
        <img
          src={
            item.Poster !== "N/A"
              ? item.Poster
              : "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg" // Default image
          }
          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h2
            className="text-white font-semibold text-base"
            onClick={() => navigate(`details/${item.imdbID}`)}
          >
            View Details
          </h2>
        </div>
        {user?.email &&
          (isMovieExist ? (
            <div
              onClick={() => handleListSession(item.imdbID)}
              className="bg-white hover:text-primary absolute rounded-full top-3 right-3 text-primary h-8 w-8 flex items-center justify-center  "
            >
              <MdDelete className="text-xl" />
            </div>
          ) : (
            <div
              onClick={() => handleListSession(item.imdbID)}
              className="bg-primary hover:bg-white hover:text-primary absolute rounded-full top-3 right-3 text-white h-8 w-8 flex items-center justify-center  "
            >
              <CiBookmark className="text-xl" />
            </div>
          ))}
      </div>
      <div>
        <div className="flex justify-between text-white p-3 items-center">
          <h1 className="text-sm truncate w-full">
            {item.Title?.slice(0, 40)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
