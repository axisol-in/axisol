import React, { useState } from "react";
import { MapPin, Zap} from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import { projectInfo } from "../assets/projectInfo";
import Title from "./ui/Title";

const stats = [
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 2.5, suffix: " MW+", label: "Total Capacity Installed" },
  { value: 15, suffix: " Cr+", label: "Customer Savings" },
  { value: 12, suffix: "", label: "States Covered" },
];

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projects = projectInfo;

  return (
    <section
      id="projects"
      className="bg-[#fcfbf8] dark:bg-secondary min-h-screen transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Title content="Our Completed Projects" />

        {/* Stats with Animation */}
        <div className="dark:bg-secondary p-8 rounded-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-2">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    decimals={stat.label.includes("Capacity") ? 1 : 0}
                  />
                  {stat.suffix}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-50 dark:bg-gray-900"
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
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-60"
                  }`}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm font-medium">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
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
                        {/* <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{project.completion}</span>
                        </div> */}
                      </div>

                      {/* <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3">
                        <p className="font-semibold text-center">
                          Monthly Savings: {project.savings}
                        </p>
                      </div> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
