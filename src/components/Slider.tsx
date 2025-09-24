"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Slider1 from "../assets/images/slider1.webp";
import Slider2 from "../assets/images/slider2.webp";
import Slider3 from "../assets/images/slider3.webp";

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
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // scroll progress inside the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // move horizontally according to vertical scroll
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(slides.length - 1) * 100}%`]
  );

  return (
    <section ref={sectionRef} className="relative h-[500vh]">
      {/* sticky container that follows scroll */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[100vw]">
          {slides.map((slide) => {
            return (
              <div
                key={slide.id}
                className="h-screen w-screen flex items-end justify-center relative flex-shrink-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center sm:bg-top"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Text */}
                <div className="w-auto mb-10 px-5 relative z-10">
                  <h1 className="text-white text-xl md:text-4xl mb-2 text-left">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 text-sm md:text-xl leading-relaxed text-left">
                    {slide.text}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
