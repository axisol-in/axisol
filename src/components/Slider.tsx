import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Slider1 from "../assets/images/slider1.png";
import Slider2 from "../assets/images/slider2.png";
import Slider3 from "../assets/images/slider3.png";

gsap.registerPlugin(ScrollTrigger);

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
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    const getDistance = () => container.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      // Horizontal scroll
      gsap.to(container, {
        x: () => `-${getDistance()}px`,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          snap: 1 / (slides.length - 1),
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative h-screen w-screen overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex h-full"
        style={{ width: `${slides.length * 100}vw` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="h-screen w-screen flex items-end justify-center relative"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center sm:bg-top"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="w-auto mb-10 px-5">
              <h1 className="w-full relative z-10 text-white text-xl md:text-4xl mb-2 text-left text-wrap">
                {slide.title}
              </h1>
              <p className="relative z-10 text-gray-300 text-sm md:text-xl leading-relaxed text-left">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
