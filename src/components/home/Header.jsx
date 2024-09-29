import { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "./LogInModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  console.log(location);
  return (
    <div className="bg-secondary py-5 sticky top-0 z-[999] hidden  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:block">
      <div className="custom-container">
        <div className="grid grid-cols-10 w-full items-center">
          <h1 className="text-white/90 italic text-3xl font-semibold col-span-3">
            WatchList
          </h1>

          <div className="relative flex items-center justify-center col-span-4 ">
            <input
              type="text"
              className="border border-secondary/30 outline-none px-5 py-2.5 text-sm text-white/80 w-full rounded-3xl bg-primary-light"
              placeholder="Search...."
            />
          </div>

          <div className="flex gap-8 items-center justify-end col-span-3">
            <div className="flex gap-8">
              <h2
                className={`text-white cursor-pointer text-sm ${
                  location.pathname === "/" ? "font-semibold" : "font-light"
                }`}
              >
                Home
              </h2>
              <h2
                className={`text-white cursor-pointer text-sm ${
                  location.pathname === "/my-list"
                    ? "font-semibold"
                    : "font-light"
                }`}
              >
                My List
              </h2>
            </div>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-primary px-4 py-2 rounded-3xl text-white text-sm"
            >
              Get started
            </button>
            {/* <div className="">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1499357945.1723107809&semt=ais_hybrid"
                className="h-8 cursor-pointer w-8 rounded-full"
              />
            </div> */}
          </div>
        </div>
      </div>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Header;
