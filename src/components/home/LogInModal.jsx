/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAuth } from "../../contexts";

const Modal = ({ setOpenModal }) => {
  const { setUser } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return setError("Invalid Email");
    }
    setUser({ email });
    console.log(email);
    setError("");
    setOpenModal(false);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[3px]"
      onClick={() => setOpenModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-secondary/80   md:w-[33rem] px-8 py-10 gap-5 md:gap-8 flex flex-col rounded-[1rem] border border-primary-light"
      >
        <div className="flex justify-between w-full">
          <h1 className="text-3xl font-semibold text-white">LogIn/SignUp</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-5 flex-col">
          <div className="flex gap-1 md:gap-3 flex-col">
            <h1 className="text-white">Email address *</h1>
            <input
              placeholder="Enter your email..."
              type="text"
              required
              className="border rounded-md border-slate-300 outline-none px-4 py-3 text-black w-full"
            />
            {error && <p className="leading-0 text-red-500 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            className="bg-primary/80 font-semibold rounded-md text-white px-3 py-3 w-full"
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
