import { ImCross } from "react-icons/im";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black ">
        <div className="bg-secondary w-[30%] p-12 gap-6 flex flex-col  rounded-3xl">
          <div className="flex justify-between w-full ">
            <h1 className=" text-lg text-primary font-semibold">
              LogIn/SignUp
            </h1>
            <div
              onClick={() => setOpenModal(false)}
              className="bg-primary flex items-center justify-center h-6 w-6 text-sm cursor-pointer text-white rounded-full"
            >
              <div>
                <ImCross className="text-sm" />
              </div>
            </div>
          </div>
          <form className="flex gap-5 flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 flex-col">
                <h1 className="text-white">Email</h1>
                <input
                  type="text"
                  required
                  className="border border-slate-300 outline-none p-2 text-black w-full"
                />
              </div>
              <button className="bg-primary/80 rounded-md text-white px-3 py-2 w-full">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;
