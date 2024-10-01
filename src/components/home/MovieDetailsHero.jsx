import Header from "./Header";
import ResponsiveNavBar from "./ResponsiveNavbar";

const MovieDetailsHero = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <ResponsiveNavBar />
      <div>
        <section className=" h-[28rem] lg:h-[35rem] w-full">
          <div
            className="flex h-full w-full bg-no-repeat object-contain bg-cover relative"
            style={{
              backgroundImage: `url(${"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"})`,
            }}
          >
            <div className="z-10 absolute inset-0 w-full h-full bg-gradient-to-r from-black/95 via-black/60 to-black/10 bg-blend-overlay"></div>
            <div className="grid  md:grid-cols-2 custom-container z-20">
              <div className="flex flex-col gap-2 lg:gap-3 md:gap-3 justify-center p-4 md:p-0">
                <div className="flex items-center gap-2 text-white mb-2">
                  <div className="px-2 py-1 bg-primary w-fit rounded-md">
                    PG-13
                  </div>
                  <p>On IMDb</p>
                </div>
                <h1 className="text-white/90 font-semibold text-2xl md:text-4xl truncate">
                  Guardians of the Galaxy Vol. 2
                </h1>
                <p className="text-white/90 text-sm md:text-base leading-6">
                  {
                    "                The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego"
                  }
                </p>
                <div className="flex items-center gap-3 mt-2 lg:mt-3">
                  <button className="bg-white font-medium py-2 rounded-md w-fit px-4">
                    Add to wishlist
                  </button>
                  <button className="bg-secondary text-white border border-slate-500 font-medium py-2 rounded-md w-fit px-4">
                    05 May 2017
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieDetailsHero;
