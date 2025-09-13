import React from "react";

const WhyChooseSection: React.FC = () => {
  // const benefits = [
  //   {
  //     icon: <Zap className="w-8 h-8" />,
  //     title: "Zero Investment Solar Installation",
  //     description: "Get premium solar panels installed with absolutely no upfront cost. Start saving from day one!",
  //     color: "from-yellow-400 to-orange-500"
  //   },
  //   {
  //     icon: <IndianRupee className="w-8 h-8" />,
  //     title: "₹90 Lakh Subsidy Available",
  //     description: "Take advantage of PM Surya Ghar Yojana subsidy. Maximum benefits for residential installations.",
  //     color: "from-green-400 to-emerald-500"
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "25 Years Extended Warranty",
  //     description: "Industry-leading warranty coverage on panels, inverters, and installation workmanship.",
  //     color: "from-blue-400 to-cyan-500"
  //   },
  //   {
  //     icon: <Award className="w-8 h-8" />,
  //     title: "Industry Certifications",
  //     description: "ISO certified, MNRE approved, and BIS compliant. Quality you can trust.",
  //     color: "from-purple-400 to-pink-500"
  //   },
  //   {
  //     icon: <Leaf className="w-8 h-8" />,
  //     title: "100% Clean Energy",
  //     description: "Reduce your carbon footprint while saving money. Contribute to a greener planet.",
  //     color: "from-emerald-400 to-green-500"
  //   },
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "50,000+ Satisfied Customers",
  //     description: "Join thousands of homeowners already enjoying free electricity and reduced bills.",
  //     color: "from-red-400 to-pink-500"
  //   },
  //   {
  //     icon: <Clock className="w-8 h-8" />,
  //     title: "Quick Installation",
  //     description: "Professional installation completed in just 1-2 days with minimal disruption.",
  //     color: "from-indigo-400 to-blue-500"
  //   },
  //   {
  //     icon: <TrendingUp className="w-8 h-8" />,
  //     title: "Guaranteed Savings",
  //     description: "Pay less monthly than your current electricity bill, with guaranteed performance.",
  //     color: "from-teal-400 to-cyan-500"
  //   }
  // ];
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl text-white mb-6">
            Why Choose <span className="text-primary">AXISOL</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of home energy with India's most trusted solar
            installation company. Zero investment, maximum savings, and complete
            peace of mind.
          </p>
        </div>
      </div>
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 mt-32 grid gap-8 grid-cols-3">
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
