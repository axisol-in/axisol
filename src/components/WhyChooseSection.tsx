import React from "react";

const WhyChooseSection: React.FC = () => {
  type Content = {
    id: number;
    title: string;
    text: string;
  };

  const content: Content[] = [
    {
      id: 1,
      title: "Zero Investment Solar Installation",
      text: "Get premium solar panels installed with absolutely no upfront cost. Start saving from day one!",
    },
    {
      id: 2,
      title: "Industry Certifications",
      text: "ISO certified, MNRE approved, and BIS compliant. Quality you can trust.",
    },
    {
      id: 3,
      title: "Guaranteed Savings",
      text: "Pay less monthly than your current electricity bill, with guaranteed performance.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-white mb-6">
            Why Choose <span className="text-primary">AXISOL</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
            Experience the future of home energy with India's most trusted solar
            installation company. Zero investment, maximum savings, and complete
            peace of mind.
          </p>
        </div>
      </div>
      {/* Content Grid */}
      <div className="w-full mx-auto px-8 md:px-16 mt-20 md:mt-32 grid gap-16 grid-cols-1 md:grid-cols-3">
        {content.map((item) => (
          <div key={item.id}>
            <h1 className="relative z-10 text-white text-xl md:text-2xl mb-2 text-left">
              {item.title}
            </h1>
            <p className="relative z-10 text-gray-300 text-sm md:text-lg leading-relaxed text-left">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
