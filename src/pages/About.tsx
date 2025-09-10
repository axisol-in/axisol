import React from "react";
import ServiceLocationsSection from "../components/ServiceLocationsSection";
import VideoSection from "../components/VideoSection";
import UserStoriesSection from "../components/UserStoriesSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <ServiceLocationsSection />
      <VideoSection />
      <UserStoriesSection />
    </>
  );
};

export default AboutPage;
