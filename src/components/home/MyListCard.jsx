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
    {
      id: 5,
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
    {
      id: 5,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTdkYjkyMzgtMjQyOC00ZmNiLTg1OTAtNzJhY2MyNjlmM2M5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
      title: "The Story of Frozen: Making a Disney Ani",
      Year: "2012",
    },
  ];

  return (
    <div className="flex items-center gap-8 flex-col justify-center bg-secondary">
      <div className=" w-full flex flex-col p-4 gap-4 lg:gap-6 custom-container ">
        <div className="flex justify-between">
          <h1 className="text-white text-2xl">My List</h1>
        </div>
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4">
          {wishListCardArr?.map((item, i) => (
            <div key={i} className="group ">
              <div className=" h-64 md:!h-40 relative cursor-pointer !w-11/12 rounded-xl !overflow-hidden">
                <a href={`${`/details/id=${item.id}`}`}>
                  <img
                    src={item.image}
                    className="w-full h-full !object-cover"
                    alt="Poster"
                  />
                </a>
                <div className="bg-primary hover:bg-white hover:text-primary  absolute rounded-full top-3 right-3 text-white h-8 w-8 flex items-center justify-center  ">
                  <MdDelete className="text-xl text-white hover:text-primary  " />
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
