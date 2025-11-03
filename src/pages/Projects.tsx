import React from "react";
import SEO from "../components/SEO";
import ProjectsSection from "../components/ProjectsSection";

const ProjectsPage: React.FC = () => {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Solar Projects Portfolio - Axisol",
    "description": "Explore our successful residential and commercial solar installation projects across India",
  };

  return (
    <>
      <SEO
        title="Solar Projects Portfolio - Residential & Commercial Solar Installations | Axisol"
        description="View Axisol's completed solar projects across India. Browse our portfolio of residential rooftop solar installations, commercial solar systems, and industrial solar power plants. Real results, real savings."
        keywords="solar projects India, residential solar installations, commercial solar projects, rooftop solar portfolio, solar power plant projects, solar installation gallery, completed solar projects"
        canonical="https://www.axisol.in/projects"
        ogUrl="https://www.axisol.in/projects"
        schema={projectsSchema}
      />
      <ProjectsSection />
    </>
  );
};

export default ProjectsPage;
