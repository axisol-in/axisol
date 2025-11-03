import React from "react";

import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import Slider from "../components/Slider";

import Home1 from "../assets/images/home1.webp";
import Location from "../components/Location";

const HomePage: React.FC = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Axisol - Solar Energy Solutions India",
    "description": "Leading solar energy provider in India offering residential and commercial solar panel installation with up to 90% savings on electricity bills.",
    "provider": {
      "@type": "Organization",
      "name": "Axisol",
      "url": "https://www.axisol.in"
    }
  };

  return (
    <>
      <SEO
        title="Axisol - Best Solar Panel Installation & Green Energy Solutions in India"
        description="India's #1 solar energy company. Get premium solar panel installation for homes & businesses. Save up to 90% on electricity bills. 25+ year warranty. Free consultation available!"
        keywords="solar energy India, best solar panel installation, solar power system India, rooftop solar panels, commercial solar solutions, residential solar India, solar EPC company, renewable energy India, green energy, solar subsidy India, net metering"
        canonical="https://www.axisol.in/"
        ogUrl="https://www.axisol.in/"
        schema={homeSchema}
      />
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
      <Location />
    </>
  );
};

export default HomePage;