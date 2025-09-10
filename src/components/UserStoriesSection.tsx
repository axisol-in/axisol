import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin, TrendingDown } from 'lucide-react';

const UserStoriesSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      installationImage: "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      rating: 5,
      capacity: "5 KW",
      monthlySavings: "₹8,500",
      testimonial: "AXISOL's zero investment scheme changed our lives! We're saving ₹8,500 every month with no upfront cost. The installation was professional and the team explained everything clearly. Highly recommend!",
      yearInstalled: 2023
    },
    {
      name: "Priya Sharma",
      location: "Bangalore, Karnataka",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      installationImage: "https://images.pexels.com/photos/9875394/pexels-photo-9875394.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      rating: 5,
      capacity: "6 KW",
      monthlySavings: "₹10,200",
      testimonial: "Initially skeptical about zero investment, but AXISOL delivered on every promise. Our electricity bills dropped from ₹12,000 to ₹1,800! The panels look great on our roof and the app monitoring is fantastic.",
      yearInstalled: 2024
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      installationImage: "https://images.pexels.com/photos/9875392/pexels-photo-9875392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      rating: 5,
      capacity: "7 KW",
      monthlySavings: "₹11,800",
      testimonial: "Best decision we made for our home! AXISOL handled everything from permits to installation. One year later, we've saved over ₹1.4 lakhs. The 25-year warranty gives us complete peace of mind.",
      yearInstalled: 2023
    },
    {
      name: "Sunita Singh",
      location: "Delhi, NCR",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      installationImage: "https://images.pexels.com/photos/9875410/pexels-photo-9875410.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      rating: 5,
      capacity: "4 KW",
      monthlySavings: "₹7,200",
      testimonial: "AXISOL's team was incredibly professional. They completed the installation in just 1 day with zero mess. We're contributing to a greener planet while saving money every month. Win-win!",
      yearInstalled: 2024
    },
    {
      name: "Vijay Reddy",
      location: "Hyderabad, Telangana",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      installationImage: "https://images.pexels.com/photos/9875393/pexels-photo-9875393.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      rating: 5,
      capacity: "8 KW",
      monthlySavings: "₹13,500",
      testimonial: "Exceeded all expectations! AXISOL's customer service is outstanding. They monitor our system remotely and resolved a minor issue within hours. Our neighbors are now asking for references!",
      yearInstalled: 2023
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="stories" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Customer <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how our zero-investment solar installations have transformed the lives of thousands 
            of homeowners across India. Real customers, real savings, real impact.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Customer Info & Testimonial */}
              <div className="p-8 lg:p-12">
                <div className="flex items-start space-x-4 mb-8">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{testimonials[currentTestimonial].location}</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].testimonial}"
                </blockquote>

                {/* Savings Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {testimonials[currentTestimonial].capacity}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">System Size</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {testimonials[currentTestimonial].monthlySavings}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Monthly Savings</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {testimonials[currentTestimonial].yearInstalled}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Installed</div>
                  </div>
                </div>

                {/* Annual Savings Highlight */}
                <div className="flex items-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white">
                  <TrendingDown className="w-6 h-6 mr-3" />
                  <div>
                    <span className="font-semibold">Annual Savings: </span>
                    <span className="text-lg font-bold">
                      ₹{(parseInt(testimonials[currentTestimonial].monthlySavings.replace('₹', '').replace(',', '')) * 12).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Installation Image */}
              <div className="relative h-96 lg:h-full">
                <img
                  src={testimonials[currentTestimonial].installationImage}
                  alt={`Solar installation at ${testimonials[currentTestimonial].name}'s home`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {testimonials[currentTestimonial].capacity} Solar Installation
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Professional rooftop installation in {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Customer Satisfaction Metrics</h3>
            <p className="text-blue-100 text-lg">Based on feedback from 50,000+ customers across India</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98.5%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹15 Cr+</div>
              <div className="text-blue-100">Total Savings Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStoriesSection;