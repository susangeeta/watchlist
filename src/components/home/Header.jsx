import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useMovie } from "../../contexts";
import { useScrollPosition } from "../../hooks";
import SearchBar from "../common/SearchBar";
import Modal from "./LogInModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const scrollPoistion = useScrollPosition();
  const { pathname } = useLocation();
  const [searchText, setSearchText] = useState("");
  const { user } = useAuth();
  const [userModal, setUserModal] = useState(false);
  const navigate = useNavigate();
  const { movies } = useMovie();

  const handelChange = () => {
    setSearchText("");
  };

  const handleUserModalToggle = () => {
    setUserModal(!userModal); // Toggle user modal on avatar click
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
          {" "}
          <h1
            onClick={() => navigate("/")}
            className="text-white/90 cursor-pointer italic text-3xl font-semibold col-span-3"
          >
            WatchList
          </h1>
          <div className=" flex flex-col items-center justify-center col-span-4 relative">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              className={`border outline-none px-5 border-secondary/30 transition-all duration-200 ease-linear py-2.5 text-sm text-white/80 w-full rounded-lg bg-primary-light `}
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
          <div className="flex gap-8 items-center justify-end col-span-3">
            <div className="flex gap-8">
              <h2
                onClick={() => navigate("/")}
                className={`text-white cursor-pointer text-sm ${
                  pathname === "/" ? "font-semibold" : "font-light"
                }`}
              >
                Home
              </h2>
              <div className="relative">
                <h2
                  onClick={() => navigate("my-list")}
                  className={`text-white cursor-pointer text-sm ${
                    pathname === "/my-list" ? "font-semibold" : "font-light"
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
              <div className="flex items-center gap-3">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1499357945.1723107809&semt=ais_hybrid"
                  className="h-8 cursor-pointer w-8 rounded-full"
                  onClick={handleUserModalToggle}
                />

                {userModal && (
                  <div
                    onClick={() => setUserModal(false)}
                    className="absolute top-16 right-16 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    <div className="p-2 flex  items-center gap-3">
                      <img
                        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1499357945.1723107809&semt=ais_hybrid"
                        className="h-8 cursor-pointer w-8 rounded-full"
                      />
                      <h1 className="text-sm font-semibold truncate">
                        {user?.email}
                      </h1>
                    </div>
                    <div className="border-t border-gray-200 p-1 "></div>
                    <div className=" p-2">
                      <button className="bg-red-600  px-2 rounded-md text-white py-2 w-full">
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
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
