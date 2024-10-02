import { useMemo } from "react";
import Slider from "react-slick";
import {
  herosection1,
  herosection2,
  herosection3,
  herosection4,
} from "../../assets";
import Header from "./Header";
import ResponsiveNavBar from "./ResponsiveNavbar";

const Hero = () => {
  const herosectionArr = useMemo(
    () => [
      {
        id: 1,
        image: herosection1,
        title: "Lang Lang Plays Disney",
        type: "movie",
        rating: "4.5",
        sub: `Lang Lang Plays Disney showcases pianist Lang Lang’s brilliant
          renditions of classic Disney songs. Featuring pieces from The Lion
          King, Beauty and the Beast, and Frozen, the album blends his expert
          technique with the magic of Disney.`,
      },
      {
        id: 1,
        title: "Deadpool The Musical 2 - Ultimate Disney Parody",
        image: herosection2,
        type: "movie",
        rating: "4.5",
        sub: `Deadpool The Musical 2 - Ultimate Disney Parody is a hilarious
          fan-made mashup where Deadpool sings Disney-style songs while
          delivering his signature sarcastic humor.`,
      },
      {
        id: 1,
        title: "A Disney Channel Christmas!!!!",
        image: herosection3,
        type: "movie",
        rating: "4.5",
        sub: `A Disney Channel Christmas!!!! is a festive holiday special featuring
          classic Disney animated shorts and holiday-themed segments.`,
      },
      {
        id: 1,
        title: "The Disney Family Singalong Volume 2",
        image: herosection4,
        type: "movie",
        rating: "4.5",
        sub: `The Disney Family Singalong Volume 2 is a joyful musical event where
          celebrities and their families perform beloved Disney songs from their homes`,
      },
    ],
    []
  );

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      fade: true,
      slidesToScroll: 1,
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Header />
      <ResponsiveNavBar />
      <Slider {...settings}>
        {herosectionArr?.map((item, i) => (
          <section
            className=" h-[28rem] md:h-[30rem] lg:h-[35rem] w-full"
            key={i}
          >
            <div
              className="flex h-full w-full bg-no-repeat object-contain bg-cover  relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="z-10 absolute  inset-0 w-full h-full bg-gradient-to-r from-black/80 via-black/ 70 to-black/10 bg-blend-overlay"></div>
              <div className="grid  lg:grid-cols-2 custom-container z-20 md:px-5 2xl:px-0 ">
                <div className="flex flex-col gap-2 lg:gap-3 md:gap-3 justify-center p-4 md:p-0">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <div className="px-2 py-1 bg-primary w-fit rounded-md">
                      {item.rating}
                    </div>
                    <p>On IMDb</p>
                  </div>
                  <h1 className="text-white/90 font-semibold text-2xl md:text-4xl">
                    {item.title}
                  </h1>
                  <p className="text-white/90 text-sm md:text-base leading-6">
                    {item.sub}
                  </p>
                  <div className="flex items-center gap-3 mt-2 lg:mt-3">
                    <div className="bg-white/10 text-white font-medium rounded-r-md px-6 border-l-4 border-white py-2">
                      U/A 16+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
