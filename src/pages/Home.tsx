import React from "react";

import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import Slider from "../components/Slider";

import Home1 from "../assets/images/home1.webp";
import Location from "../components/Location";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="w-full bg-[#f7f9fb] pt-16 pb-10 flex justify-center items-center flex-col">
        <h1 className="text-2xl md:text-4xl text-black mb-6">
          Save On Electricity Bills
        </h1>
        <p className="text-black py-5  px-8 md:px-16 max-w-3xl text-xl leading-relaxed text-justify md:text-center">
          Generate your own clean energy from the sun for free with solar. Add
          Powerwall to store your energy for use anytime you need it. Tax
          incentives and flexible financing options may be available to help you
          get the best price for your solar system. By installing solar panels,
          you can also reduce your reliance on traditional energy sources.
        </p>
      </div>
      <img src={Home1} alt="Home 1 Image" className="w-full" />
      <WhyChooseSection />
      <Slider />
     {/* Stats Section */}
<div className="bg-[#fcfbf8] dark:bg-secondary py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {[
      { value: "500+", label: "Projects Completed" },
      { value: "2.5 MW+", label: "Total Capacity Installed" },
      { value: "₹15 Cr+", label: "Customer Savings" },
      { value: "12", label: "States Covered" },
    ].map((stat, index) => (
      <div
        key={index}
        className="bg-gradient-to-b from-[#fdfcf9] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                   rounded-2xl p-6  transition-all duration-300 
                   transform hover:-translate-y-2"
      >
        <h3 className="text-3xl font-extrabold text-primary dark:text-white mb-2">
          {stat.value}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
      </div>
    ))}
  </div>
</div>

      <Location />
    </>
  );
};

export default HomePage;
