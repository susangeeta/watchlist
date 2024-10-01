import { MdDelete } from "react-icons/md";
const TopRatedEpisode = () => {
  const wishListCardArr = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTdkYjkyMzgtMjQyOC00ZmNiLTg1OTAtNzJhY2MyNjlmM2M5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
      title: "The Story of Frozen: Making a Disney Ani",
      Year: "2012",
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTdkYjkyMzgtMjQyOC00ZmNiLTg1OTAtNzJhY2MyNjlmM2M5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
      title: "The Story of Frozen: Making a Disney Ani",
      Year: "2012",
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTdkYjkyMzgtMjQyOC00ZmNiLTg1OTAtNzJhY2MyNjlmM2M5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
      title: "The Story of Frozen: Making a Disney Ani",
      Year: "2012",
    },
    {
      id: 4,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTdkYjkyMzgtMjQyOC00ZmNiLTg1OTAtNzJhY2MyNjlmM2M5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
      title: "The Story of Frozen: Making a Disney Ani",
      Year: "2012",
    },
    {
      id: 5,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTdkYjkyMzgtMjQyOC00ZmNiLTg1OTAtNzJhY2MyNjlmM2M5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
      title: "The Story of Frozen: Making a Disney Ani",
      Year: "2012",
    },
  ];

  return (
    <div className="flex items-center gap-8 flex-col justify-center bg-secondary  py-8 lg:py-16">
      <div className=" w-full flex flex-col p-4 gap-4 lg:gap-6 custom-container ">
        <div className="flex justify-between">
          <h1 className="text-white">My List</h1>
        </div>
        <div className="grid grid-cols-2  lg:grid-cols-5 gap-4">
          {wishListCardArr?.map((item, i) => (
            <div key={i} className="group ">
              <div className=" h-52 lg:!h-64 relative cursor-pointer !w-11/12 rounded-xl !overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full !object-cover "
                />
                <div className="bg-primary absolute top-0 right-0 text-white px-2 py-1">
                  <h1 className="text-sm">{item.Year}</h1>
                </div>
                <div className="absolute h-full w-full bg-black/75 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <button className="rounded-full h-9 w-9 bg-primary flex items-center transition-all duration-500 ease-in-out justify-center hover:bg-white">
                    <MdDelete className="text-xl text-white hover:text-primary" />
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-white p-3 items-center">
                  <h1 className="text-sm truncate w-full">{item.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedEpisode;
