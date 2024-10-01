/* eslint-disable react/prop-types */
// import { CiBookmark } from "react-icons/ci";

const MovieCard = ({ data }) => {
  return (
    <div className="group">
      <div className="!h-64 relative !w-11/12 rounded-xl cursor-pointer !overflow-hidden">
        <img src={data?.Poster} className="w-full h-full !object-cover " />
        <div className="bg-primary absolute top-0 right-0 text-white px-2 py-1">
          <h1 className="text-sm">{data?.Year}</h1>
        </div>
        {/* <div className="absolute h-full w-full bg-black/75 p-2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <button className="rounded-full h-8 w-8 bg-primary flex items-center transition-all duration-500 ease-in-out justify-center hover:bg-white">
            <CiBookmark className="text-lg text-white hover:text-primary" />
          </button>
        </div> */}
      </div>
      <div>
        <div className="flex justify-between text-white p-3 items-center">
          <h1 className="text-sm truncate w-full">
            {data?.Title.slice(0, 40)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
