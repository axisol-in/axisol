import React, { useState } from 'react';
import { Play, Award, CheckCircle, Users } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const highlights = [
    { icon: <Award className="w-6 h-6" />, text: "ISO Certified Installation" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "MNRE Approved Products" },
    { icon: <Users className="w-6 h-6" />, text: "Expert Technical Team" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            See Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Expertise</span> in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how our professional team transforms homes with premium solar installations. 
            From planning to completion, we ensure quality at every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Container */}
          <div className="relative">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {!isPlaying ? (
                <>
                  <img
                    src="https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Solar installation process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-blue-600 ml-1 group-hover:text-blue-700 transition-colors" fill="currentColor" />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-white font-bold text-lg mb-2">Professional Solar Installation Process</h3>
                      <p className="text-white/80 text-sm">Watch our certified technicians install premium solar panels</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center text-white">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Video Stats */}
            <div className="absolute -bottom-6 left-6 right-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-4 shadow-2xl">
                <div className="flex justify-between items-center text-white text-sm">
                  <div className="text-center">
                    <span className="block font-bold text-lg">2.5M+</span>
                    <span>Views</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-bold text-lg">98%</span>
                    <span>Satisfaction</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-bold text-lg">1-2 Days</span>
                    <span>Installation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Installation Process
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Our certified technicians follow a systematic approach to ensure your solar installation 
                is completed safely, efficiently, and to the highest quality standards. Every project 
                is backed by our 25-year warranty and ongoing support.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Site Assessment & Planning</h4>
                  <p className="text-gray-600 dark:text-gray-300">Detailed roof analysis, shading study, and custom system design</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Professional Installation</h4>
                  <p className="text-gray-600 dark:text-gray-300">Safe mounting, precise wiring, and system commissioning by certified technicians</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Testing & Handover</h4>
                  <p className="text-gray-600 dark:text-gray-300">Complete system testing, documentation, and customer training</p>
                </div>
              </div>
            </div>

            {/* Quality Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-blue-600 dark:text-blue-400">
                    {highlight.icon}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Schedule Free Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;