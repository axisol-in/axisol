import React from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";

import Home1 from "../assets/images/home1.png";
import Home2 from "../assets/images/home2.png";


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="w-full bg-[#f7f9fb] pt-16 pb-10 flex justify-center items-center flex-col" data-bg="black">
        <h1 className="text-2 md:text-4xl text-black mb-2 drop-shadow-lg pointer-events-auto text-center ">
          Save On Electricity Bills
        </h1>
        <p className="text-black text-center text-lg py-5 w-[50%]">
          Generate your own clean energy from the sun for free with solar. Add
          Powerwall to store your energy for use anytime you need it. Tax
          incentives and flexible financing options may be available to help you
          get the best price for your solar system. By installing solar panels,
          you can also reduce your reliance on traditional energy sources.
        </p>
      </div>
      <img src={Home1} alt="Home 1 Image" className="w-full" />
      <WhyChooseSection />
      <img src={Home2} alt="Home 2 Image" className="w-full" />
    </>
  );
};

export default HomePage;
