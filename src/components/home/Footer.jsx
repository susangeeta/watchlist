const Footer = () => {
  return (
    <div className="bg-secondary border-t border-t-gray-800 py-6 ">
      <div className="custom-container flex  flex-col lg:flex-row gap-3 items-center  lg:justify-between">
        <div>
          <h1 className="text-white/90  italic text-3xl font-semibold col-span-3">
            WatchList
          </h1>
        </div>
        <div className="text-white flex gap-3 cursor-pointer">
          <p>CopyRight</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
