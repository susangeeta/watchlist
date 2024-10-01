/* eslint-disable react/prop-types */
import { CiBookmark } from "react-icons/ci";

const MovieCard = ({ item }) => {
  return (
    <>
      {" "}
      <div className="!h-64 relative !w-11/12 rounded-xl cursor-pointer !overflow-hidden">
        <img
          src={
            item.Poster !== "N/A"
              ? item.Poster
              : "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg" // Default image
          }
          className="object-cover h-full w-full"
        />
        <div className="bg-primary hover:bg-white hover:text-primary  absolute rounded-full top-3 right-3 text-white h-8 w-8 flex items-center justify-center  ">
          <CiBookmark className="text-xl text-white hover:text-primary  " />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-white p-3 items-center">
          <h1 className="text-sm truncate w-full">{item.Title.slice(0, 40)}</h1>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
