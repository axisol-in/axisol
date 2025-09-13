import React, { useState } from 'react';
import { MapPin, Zap, Calendar } from 'lucide-react';
import {projectImages}  from '../assets/assets';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: projectImages.residential.pcmc,
      title: "PCMC Project (Government)",
      location: "Pune, Maharashtra",
      capacity: "5 KW",
      type: "residential",
      completion: "2024",
      savings: "₹8,500/month"
    },
    {
      id: 2,
      image: projectImages.residential.Mukundam,
      title: "Mukundam Apartments",
      location: "Mumbai, Maharashtra",
      capacity: "7 KW",
      type: "residential",
      completion: "2024",
      savings: "₹12,000/month"
    },
    {
      id: 3,
      image: projectImages.commercial.Site35_KorumMall,
      title: "Korum Mall Commercial",
      location: "Thane, Maharashtra",
      capacity: "25 KW",
      type: "commercial",
      completion: "2023",
      savings: "₹35,000/month"
    },
    {
      id: 4,
      image: projectImages.residential.korum,
      title: "Korum Residential Block",
      location: "Thane, Maharashtra",
      capacity: "6 KW",
      type: "residential",
      completion: "2024",
      savings: "₹10,200/month"
    },
    {
      id: 5,
      image: projectImages.residential.juhu,
      title: "Juhu Beach Villas",
      location: "Mumbai, Maharashtra",
      capacity: "4 KW",
      type: "residential",
      completion: "2024",
      savings: "₹7,200/month"
    },
    {
      id: 6,
      image: projectImages.commercial.Site20_PunjabRice,
      title: "Punjab Rice Commercial",
      location: "Punjab",
      capacity: "8 KW",
      type: "commercial",
      completion: "2023",
      savings: "₹13,500/month"
    }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.type === filter
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Completed Projects</span>
          </h2>
          {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed homes and businesses across India with our zero-investment solar installations.
          </p> */}
        </div>

    {/* Filter Buttons */}
{/* Filter Buttons */}
<div className="flex justify-center mb-12">
  <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
    {/* All */}
    <button
      onClick={() => setFilter('all')}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
        filter === 'all' 
          ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg' 
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      All
    </button>

    {/* Residential */}
    <button
      onClick={() => setFilter('residential')}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
        filter === 'residential' 
          ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg' 
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      Residential
    </button>

    {/* Commercial */}
    <button
      onClick={() => setFilter('commercial')}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
        filter === 'commercial' 
          ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg' 
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      Commercial
    </button>
  </div>
</div>



        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={project.image}
                  alt={`Solar installation in ${project.location}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-60'
                }`} />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <div className="text-base font-medium mb-3 opacity-80">
                    {project.capacity} Solar Installation
                  </div>

                  {/* Project Details */}
                  {hoveredProject === project.id && (
                    <div className="space-y-3 transform translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <Zap size={14} />
                          <span>Capacity: {project.capacity}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{project.completion}</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3">
                        <p className="font-semibold text-center">
                          Monthly Savings: {project.savings}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === 'residential' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-purple-500 text-white'
                  }`}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">2.5 MW+</h3>
              <p className="text-gray-600 dark:text-gray-300">Total Capacity Installed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">₹15 Cr+</h3>
              <p className="text-gray-600 dark:text-gray-300">Customer Savings</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12</h3>
              <p className="text-gray-600 dark:text-gray-300">States Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;