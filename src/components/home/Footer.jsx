const Footer = () => {
  return (
    <div className="bg-secondary border-t border-t-gray-800 py-4 p-2  lg:py-8 ">
      <div className="flex flex-col gap-3 custom-container  ">
        <h1 className="text-white/90  text-sm text-center  lg:text-lg font-semibold col-span-3">
          Browse Movie add them to watchlist and share them with friends.
        </h1>
        <p className="text-slate-400 text-sm text-center">
          Copyright @2024{"   "}
          <span className="text-primary front-semibold cursor-pointer">
            <a href="/">WatchList</a>
          </span>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
