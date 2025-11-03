import React from "react";
import {
  PencilRuler,
  BadgeCheck,
  Lightbulb,
  ShoppingCart,
  Globe,
  ShieldCheck,
  MessageCircle,
  Gauge,
} from "lucide-react";

import SEO from "../components/SEO";
import Title from "../components/ui/Title";
import AboutVideo from "../assets/videos/about-video.mp4";

import BrochurePDF from "../assets/about/brochure.pdf";
import Brochure1 from "../assets/about/Society-Brochure-01.png";
import Brochure2 from "../assets/about/Society-Brochure-02.png";
import Brochure3 from "../assets/about/Society-Brochure-03.png";

const About: React.FC = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Axisol - Leading Solar EPC Company in India",
    "description": "Learn about Axisol's journey in providing world-class solar rooftop EPC solutions in India with best global practices.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Axisol",
      "description": "Premier solar energy solutions provider in India",
      "foundingDate": "2010",
      "areaServed": "India"
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbf8] dark:bg-black text-gray-900 dark:text-white font-inter">
      <SEO
        title="About Axisol - Leading Solar EPC Company & Green Energy Solutions Provider in India"
        description="Discover Axisol's journey in delivering world-class rooftop solar EPC solutions across India. Expert team, global partnerships, and comprehensive solar energy services. Learn why we're India's trusted solar partner."
        keywords="solar EPC company India, rooftop solar solutions, solar energy services, about Axisol, solar installation experts, renewable energy company India, solar EPC services, commercial solar provider"
        canonical="https://www.axisol.in/about"
        ogUrl="https://www.axisol.in/about"
        schema={aboutSchema}
      />
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="absolute top-0 left-0 w-full h-screen z-20 flex flex-col items-center justify-center"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))" }}
        >
          <div className="w-full mx-auto px-6 flex justify-center">
            <div className="max-w-2xl">
              <Title content="About AXISOL" />
              <p className="text-center text-lg text-gray-300 mb-4">
                Axisol was incorporated with the objective of providing best in class Rooftop EPC solutions India, following the best global practices and forging alliances with leading global players in the domain.
              </p>
              <p className="text-center text-lg text-gray-300 mb-8">
                Leveraging our experience and cross-functional synergies we have since grown as a multi-faceted company with presence across verticals within the solar energy domain, offering end-to-end solutions and services.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href={BrochurePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 font-medium bg-primary rounded-full text-white hover:scale-110 transition-transform border-2 border-transparent cursor-pointer"
                >
                  View our society brochure
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <div className="relative w-full h-screen z-10">
          <video
            src={AboutVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        {/* Values Section */}
        <section id="values" className="bg-[#fcfbf8] dark:bg-[#111] py-28">
          <div className="max-w-[1100px] mx-auto px-6 text-center">
            <h2
              className="text-4xl md:text-5xl font-semibold mb-6"
            >
              Our <span className="text-primary">Unique</span> Value Propositions
            </h2>
            <p
              className="text-gray-700 dark:text-gray-400 text-lg max-w-xl mx-auto mb-16"
            >
              Discover the pillars that set Axisol apart in solar EPC solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
              {[
                { icon: PencilRuler, title: "In-House Design & Engineering", desc: "Expert team for custom, high-performance solar solutions." },
                { icon: BadgeCheck, title: "Transparent Product Selection", desc: "Clear, unbiased options for Tier 1 products—no hidden agendas." },
                { icon: Lightbulb, title: "Innovative Mounting Solutions", desc: "Creative designs to maximize space and power generation." },
                { icon: ShoppingCart, title: "Direct Procurement", desc: "Efficient sourcing for best pricing and quality assurance." },
                { icon: Globe, title: "Web Portal & Mobile Application", desc: "Track project progress and access resources anytime, anywhere." },
                { icon: ShieldCheck, title: "5 Years EPC Support", desc: "Comprehensive warranty and maintenance for peace of mind." },
                { icon: MessageCircle, title: "Central Complaint Handling System", desc: "Streamlined support for quick resolution of any issues." },
                { icon: Gauge, title: "Net/Gross Metering Assistance", desc: "Expert help for seamless integration with local utilities." },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-[#fdfcf8] dark:bg-[#181818] border border-gray-300 dark:border-none hover:scale-105 transition-transform"
                    style={{ transitionDelay: `${100 * (index + 1)}ms` }}
                  >
                    <Icon size={40} className="mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2 text-lg">{stat.title}</h3>
                    <p className="text-gray-700 dark:text-gray-400 text-sm">{stat.desc}</p>
                  </div>

                );
              })}
            </div>
          </div>
        </section>

        {/* Brochure Section */}
        <section className="py-16 px-10 sm:px-5">
          <div className="flex flex-wrap justify-center gap-4">
            <img src={Brochure1} className="h-[96] md:h-[600px] rounded-lg shadow-lg" alt="Society Brochure 01" />
            <img src={Brochure2} className="h-[96] md:h-[600px] rounded-lg shadow-lg" alt="Society Brochure 02" />
            <img src={Brochure3} className="h-[96] md:h-[600px] rounded-lg shadow-lg" alt="Society Brochure 03" />
          </div>
        </section>
      </main>
    </div>

  );
};



export default About;
