import { useMemo } from "react";
import Slider from "react-slick";

const Hero = () => {
  const herosectionArr = [
    {
      id: 1,
      image:
        "https://nowtoronto.com/wp-content/uploads/2024/01/lang-lang-plays-disney.png",
      title: "Lang Lang Plays Disney",
      rating: "4.5",
      sub: `Lang Lang Plays Disney showcases pianist Lang Lang’s brilliant
          renditions of classic Disney songs. Featuring pieces from The Lion
          King, Beauty and the Beast, and Frozen, the album blends his expert
          technique with the magic of Disney.`,
    },
    {
      id: 1,
      title: "Deadpool The Musical 2 - Ultimate Disney Parody",
      image:
        "https://w0.peakpx.com/wallpaper/201/308/HD-wallpaper-deadpool-superheros-battle-2018-movie-deadpool-2.jpg",
      rating: "4.5",
      sub: `Deadpool The Musical 2 - Ultimate Disney Parody is a hilarious
          fan-made mashup where Deadpool sings Disney-style songs while
          delivering his signature sarcastic humor.`,
    },
    {
      id: 1,
      title: "A Disney Channel Christmas!!!!",
      image:
        "https://preview.redd.it/since-disney-channel-obviously-doesnt-care-anymore-ill-v0-o5jwtojzz28c1.jpg?width=1080&crop=smart&auto=webp&s=1ee72fcb23c04913c21244e9695967bdedf1f231",
      rating: "4.5",
      sub: `A Disney Channel Christmas!!!! is a festive holiday special featuring
          classic Disney animated shorts and holiday-themed segments.`,
    },
    {
      id: 1,
      title: "The Disney Family Singalong Volume 2",
      image:
        "https://cdn1.edgedatg.com/aws/v2/abc/ABCUpdates/blog/3336870/a9f76e504f03b9e35827a9d1ceeffca1/512x288-Q90_a9f76e504f03b9e35827a9d1ceeffca1.jpg",
      rating: "4.5",
      sub: `The Disney Family Singalong Volume 2 is a joyful musical event where
          celebrities and their families perform beloved Disney songs from their homes`,
    },
  ];

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
      <Slider {...settings}>
        {herosectionArr?.map((item, i) => (
          <section className="h-[35rem] w-full" key={i}>
            <div
              className="flex h-full w-full bg-no-repeat object-contain bg-cover relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="z-10 absolute inset-0 w-full h-full bg-gradient-to-r from-black/80 via-black/ 70 to-black/10 bg-blend-overlay"></div>
              <div className="grid grid-cols-2 custom-container z-20">
                <div className="flex flex-col gap-3 justify-center">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <div className="px-2 py-1 bg-primary w-fit rounded-md">
                      {item.rating}
                    </div>
                    <p>On IMDb</p>
                  </div>
                  <h1 className="text-white/90 font-semibold text-4xl">
                    {item.title}
                  </h1>
                  <p className="text-white/90 leading-6">{item.sub}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button className="bg-white font-medium py-2 rounded-md w-fit px-4">
                      Add to wishlist
                    </button>
                    <div className="bg-white/10 text-white font-medium rounded-md px-6 border-l-4 border-white py-2">
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
