/* eslint-disable react/prop-types */
import { CiBookmark } from "react-icons/ci";

const MovieCard = ({ item, onAddToWishlist }) => {
  return (
    <div className="w-full">
      <div className="!h-64 relative !w-11/12 group rounded-xl cursor-pointer !overflow-hidden">
        <img
          src={
            item.Poster !== "N/A"
              ? item.Poster
              : "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg" // Default image
          }
          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h2 className="text-white font-semibold text-base">View Details</h2>
        </div>
        <div
          onClick={() => onAddToWishlist(item)}
          className="bg-primary hover:bg-white hover:text-primary absolute rounded-full top-3 right-3 text-white h-8 w-8 flex items-center justify-center  "
        >
          <CiBookmark className="text-xl" />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-white p-3 items-center">
          <h1 className="text-sm truncate w-full">{item.Title.slice(0, 40)}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
