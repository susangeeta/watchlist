import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useScrollPosition } from "../../hooks";
import Modal from "./LogInModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const scrollPoistion = useScrollPosition();
  const { search } = useLocation();
  const location = useLocation();

  const fetchData = (value) => {
    fetch(`https://omdbapi.com/?apikey=36e67ebf&s=disney&type=movie&page=2}`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
          value && item && item.Title.toLowercase().includes(value);
        });
        console.log(results);
      });
  };

  const handelChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div
      className={`py-5 fixed w-full top-0 z-[999] hidden lg:block transition-all duration-200 ease-linear ${
        scrollPoistion > 0
          ? "bg-secondary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] "
          : "bg-gradient-to-b from-secondary/40 to-secondary/30"
      }`}
    >
      <div className="custom-container">
        <div className="grid grid-cols-10 w-full items-center">
          <h1 className="text-white/90 italic text-3xl font-semibold col-span-3">
            WatchList
          </h1>

          <div className="relative flex items-center justify-center col-span-4 ">
            <input
              value={input}
              onChange={(e) => handelChange(e.target.value)}
              type="text"
              className={`border outline-none px-5 border-secondary/30 transition-all duration-200 ease-linear py-2.5 text-sm text-white/80 w-full rounded-3xl bg-primary-light ${
                scrollPoistion > 0 ? "" : "opacity-0"
              }`}
              placeholder="Search...."
            />
          </div>

          <div className="flex gap-8 items-center justify-end col-span-3">
            <div className="flex gap-8">
              <a href="/">
                <h2
                  className={`text-white cursor-pointer text-sm ${
                    location.pathname === "/" ? "font-semibold" : "font-light"
                  }`}
                >
                  Home
                </h2>
              </a>
              <a href="my-list">
                <h2
                  className={`text-white cursor-pointer text-sm ${
                    location.pathname === "/my-list"
                      ? "font-semibold"
                      : "font-light"
                  }`}
                >
                  My List
                </h2>
              </a>
            </div>
            {search ? (
              <div className="">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1499357945.1723107809&semt=ais_hybrid"
                  className="h-8 cursor-pointer w-8 rounded-full"
                />
              </div>
            ) : (
              <button
                onClick={() => setOpenModal(true)}
                className="bg-primary px-4 py-2 rounded-3xl text-white text-sm"
              >
                Get started
              </button>
            )}
          </div>
        </div>
      </div>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Header;
