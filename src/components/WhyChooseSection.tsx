import React from "react";
import {
  Zap,
  IndianRupee,
  Shield,
  Award,
  Leaf,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";

const WhyChooseSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Zero Investment Solar Installation",
      description:
        "Get premium solar panels installed with absolutely no upfront cost. Start saving from day one!",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "₹90 Lakh Subsidy Available",
      description:
        "Take advantage of PM Surya Ghar Yojana subsidy. Maximum benefits for residential installations.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "25 Years Extended Warranty",
      description:
        "Industry-leading warranty coverage on panels, inverters, and installation workmanship.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certifications",
      description:
        "ISO certified, MNRE approved, and BIS compliant. Quality you can trust.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Clean Energy",
      description:
        "Reduce your carbon footprint while saving money. Contribute to a greener planet.",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "50,000+ Satisfied Customers",
      description:
        "Join thousands of homeowners already enjoying free electricity and reduced bills.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Installation",
      description:
        "Professional installation completed in just 1-2 days with minimal disruption.",
      color: "from-indigo-400 to-blue-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Guaranteed Savings",
      description:
        "Pay less monthly than your current electricity bill, with guaranteed performance.",
      color: "from-teal-400 to-cyan-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-black transition-colors duration-300"
      data-bg="white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose <span className="text-primary">AXISOL</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of home energy with India's most trusted solar
            installation company. Zero investment, maximum savings, and complete
            peace of mind.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon Background */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Call to Action
        <div className="w-full text-center mt-16">
          <div className="w-full inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white shadow-xl">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6" />
              <span className="font-semibold">Government Approved</span>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">100% Safe & Secure</span>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6" />
              <span className="font-semibold">Trusted by 50,000+</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseSection;
