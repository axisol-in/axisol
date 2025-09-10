// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Users, MapPin, Award } from "lucide-react";

import Button from "./ui/Button";

const HeroSection: React.FC = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   {
  //     title: "Zero Investment Solar Installation",
  //     subtitle: "Join 50,000+ Happy Customers",
  //     description:
  //       "Get solar panels installed with zero upfront cost. Pay monthly to us instead of your electricity provider, then enjoy free power!",
  //     image:
  //       "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     badges: ["50,000+ Customers", "Made in India"],
  //   },
  //   {
  //     title: "How Our Zero Investment Scheme Works",
  //     subtitle: "Simple. Smart. Sustainable.",
  //     description:
  //       "Step 1: Free Installation • Step 2: Pay us monthly (less than your current bill) • Step 3: After contract period, enjoy completely free electricity forever!",
  //     image:
  //       "https://images.pexels.com/photos/9875394/pexels-photo-9875394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     badges: ["Zero Investment", "Guaranteed Savings"],
  //   },
  //   {
  //     title: "Transform Your Home with Solar Power",
  //     subtitle: "Professional Rooftop Installations",
  //     description:
  //       "See how solar panels seamlessly integrate with your home's architecture while providing clean, renewable energy for decades.",
  //     image:
  //       "https://images.pexels.com/photos/9875413/pexels-photo-9875413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     badges: ["25 Year Warranty", "Premium Quality"],
  //   },
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [slides.length]);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  return (
    <section className="w-screen h-screen">
      {
        /* <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl text-blue-300 mb-6 font-semibold">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    {slide.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold text-sm shadow-lg"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      Get Free Consultation
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                      Calculate Savings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      */
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg pointer-events-auto text-center">
            Go Solar. Zero Investment. Infinite Savings.
          </h1>
          <div className="flex gap-10">
            <Button title="Get Started" className="pointer-events-auto bg-white" />
            <Button title="Get Started" className="pointer-events-auto bg-transparent text-white border border-2 hover:bg-white hover:text-black" />
          </div>
        </div>
        /*

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div> */
      }

      <div className="relative w-full h-full">
        <video
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Solar-Panel-Hero-Desktop.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* Stats Bar
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600/90 to-green-600/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center md:justify-between items-center flex-wrap gap-6">
            <div className="flex items-center space-x-2 text-white">
              <Users size={20} />
              <span className="font-semibold">50,000+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <MapPin size={20} />
              <span className="font-semibold">Pan India Service</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Award size={20} />
              <span className="font-semibold">₹90L Subsidy Available</span>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
