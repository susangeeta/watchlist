import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import Modal from "./LogInModal";

const ResponsiveNavBar = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { search } = useLocation();

  return (
    <div
      className={`py-1 fixed w-full top-0 z-[999] flex lg:hidden bg-gradient-to-b from-secondary/70 to-secondary/70 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] `}
    >
      <div className="flex justify-between gap-7 w-full custom-container p-2 items-center">
        <div className="flex gap-3 items-center">
          <RxHamburgerMenu
            onClick={() => setOpen(true)}
            className="text-white text-xl"
          />
          <h1 className="text-white italic text-base font-semibold col-span-3">
            <a href="/">WatchList</a>
          </h1>
        </div>

        <div className="relative flex items-center justify-center col-span-4 ">
          <input
            type="text"
            className="bg-secondary/60 outline-none border border-slate-400 rounded-md text-white p-2 w-32"
            placeholder="Search...."
          />
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
            <a href="/">
              <h1 className="text-black  text-xl font-semibold">
                {" "}
                <a href="/">WatchList</a>
              </h1>
            </a>
            <div className="flex gap-1 lg:order-2">
              <div onClick={() => setOpen(false)} className="">
                X
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="px-1 flex flex-col gap-2">
              <a href="/">
                <h2
                  className={`text-black cursor-pointer text-sm ${
                    location.pathname === "/" ? "font-semibold" : "font-light"
                  }`}
                >
                  Home
                </h2>
              </a>
              <a href="my-list">
                <h2
                  className={`text-black cursor-pointer text-sm ${
                    location.pathname === "/my-list"
                      ? "font-semibold"
                      : "font-light"
                  }`}
                >
                  My List
                </h2>
              </a>
            </div>
            <div>
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
                  className="bg-primary px-4 py-2 rounded-md text-white text-sm"
                >
                  Get started
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default ResponsiveNavBar;
