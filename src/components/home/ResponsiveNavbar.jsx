import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useAuth, useMovie } from "../../contexts";
import SearchBar from "../common/SearchBar";
import Modal from "./LogInModal";

const ResponsiveNavBar = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { movies } = useMovie();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handelChange = () => {
    setSearchText("");
  };

  return (
    <div
      className={`py-1 fixed w-full top-0 z-[999] flex lg:hidden bg-gradient-to-b from-secondary/70 to-secondary/70 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] `}
    >
      <div className="flex  gap-12 w-full custom-container p-2 items-center">
        <div className="flex gap-3 items-center">
          <RxHamburgerMenu
            onClick={() => setOpen(true)}
            className="text-white text-xl"
          />
        </div>

        <div className=" flex flex-col w-full items-center justify-center relative">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className={`bg-secondary/60 outline-none border border-slate-400 rounded-md text-white p-2 w-full `}
            placeholder="Search...."
          />
          {searchText && (
            <div
              onClick={handelChange}
              className="absolute top-3 right-5 cursor-pointer "
            >
              <RxCross2 className="text-white text-xl " />
            </div>
          )}

          <div className="absolute left-0 right-0 top-full">
            <SearchBar searchText={searchText} />
          </div>
        </div>
      </div>

      <div
        className={`${
          open
            ? "opacity-1 visible z-[100] translate-y-0  bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter"
            : "-translate-y-[100%] opacity-0"
        } responsive-nav-animate fixed left-0 top-0 right-0 h-fit w-full transition-all duration-500 ease-in-out`}
      >
        <div className="scrollBarNone py flex h-full w-full flex-col gap-2 overflow-scroll bg-white p-3">
          <div className="z-[200] flex w-full justify-between bg-white">
            <h1
              onClick={() => navigate("/")}
              className="text-black  text-xl font-semibold"
            >
              WatchList
            </h1>
            <div className="flex gap-1 lg:order-2">
              <div onClick={() => setOpen(false)} className="">
                X
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="px-1 flex flex-col gap-2">
              <h2
                onClick={() => navigate("/")}
                className={`text-black cursor-pointer text-sm ${
                  location.pathname === "/" ? "font-semibold" : "font-light"
                }`}
              >
                Home
              </h2>

              <div className="relative">
                <h2
                  onClick={() => navigate("my-list")}
                  className={`text-black cursor-pointer text-sm ${
                    location.pathname === "/my-list"
                      ? "font-semibold"
                      : "font-light"
                  }`}
                >
                  My List
                </h2>
                {movies.length > 0 && (
                  <div className="rounded-full h-4 w-4 flex items-center justify-center bg-primary absolute -top-3 left-10">
                    <h1 className="text-white text-xs">{movies.length}</h1>
                  </div>
                )}
              </div>
            </div>
            {user?.email ? (
              <div className="flex gap-2 items-center">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1499357945.1723107809&semt=ais_hybrid"
                  className="h-10 cursor-pointer w-10 rounded-full"
                />
                <div className="flex flex-col gap-1 ">
                  <h1 className="text-sm text-black font-semibold">
                    {user?.email}
                  </h1>
                  <div
                    onClick={() => {
                      setUser({});
                      navigate("/");
                    }}
                    className="text-sm bg-primary text-white border py-1 rounded-md  text-center w-24"
                  >
                    LogOut
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setOpenModal(true);
                  setOpen(false);
                }}
                className="bg-primary px-4 w-36 py-2 rounded-md  md:rounded-3xl text-white text-sm"
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

export default ResponsiveNavBar;
