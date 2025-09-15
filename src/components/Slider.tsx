import React, { useState, useEffect } from "react";

import Slider1 from "../assets/images/slider1.png";
import Slider2 from "../assets/images/slider2.png";
import Slider3 from "../assets/images/slider3.png";

type Slide = {
  id: number;
  image: string;
  title: string;
  text: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: Slider1,
    title: "100% Clean Energy",
    text: "Reduce your carbon footprint while saving money. Contribute to a greener planet.",
  },
  {
    id: 2,
    image: Slider2,
    title: "Quick Installation",
    text: "Professional installation completed in just 1-2 days with minimal disruption.",
  },
  {
    id: 3,
    image: Slider3,
    title: "50,000+ Satisfied Customers",
    text: "Join thousands of homeowners already enjoying free electricity and reduced bills.",
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-screen w-screen flex items-end justify-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center sm:bg-top"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="w-auto mb-10 px-5 relative z-10">
            <h1 className="w-full text-white text-xl md:text-4xl mb-2 text-left text-wrap">
              {slide.title}
            </h1>
            <p className="text-gray-300 text-sm md:text-xl leading-relaxed text-left">
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Slider;
