import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className="custom-container py-12">
      <div className="flex flex-col gap-2">
        <div className="flex gap-5 relative">
          <input
            type="text"
            placeholder="Search for a movie that you are looking for...."
            className="border text-lg border-black p-4  w-full rounded-lg bg-[#233a50] text-white font-semibold "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <img
            src="./search-white.png"
            alt=""
            className="h-5 w-5 absolute top-5 cursor-pointer right-7"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
