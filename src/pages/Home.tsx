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
        <h1 className="text-2xl md:text-4xl text-black mb-6 ">
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
      {/* Stats */}
      <div className="bg-secondary p-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              500+
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Projects Completed
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              2.5 MW+
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Total Capacity Installed
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              ₹15 Cr+
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Customer Savings</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              12
            </h3>
            <p className="text-gray-600 dark:text-gray-300">States Covered</p>
          </div>
        </div>
      </div>
      <Location />
    </>
  );
};

export default HomePage;
