import HeroVideo from "../assets/videos/hero-video.mp4";
import { NavLink } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="w-screen h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 pointer-events-none animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg pointer-events-auto text-center">
          Zero Investment
        </h1>
        <h2 className="text-xl md:text-2xl text-white mb-10 drop-shadow-lg text-center">
          Go Solar, Infinite Savings
        </h2>
        <div className="flex gap-10">
          <NavLink
            to="/about"
            className="pointer-events-auto bg-primary rounded-full hover:scale-105 transition-transform px-4 py-2"
          >
            Know More
          </NavLink>
          <NavLink
            to="/contact"
            className="pointer-events-auto bg-transparent text-white border-2 hover:bg-white hover:text-black rounded-full hover:scale-105 transition-transform px-4 py-2"
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      <div className="relative w-full h-full">
        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
