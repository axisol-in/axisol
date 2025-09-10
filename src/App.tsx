import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseSection from './components/WhyChooseSection';
import ProjectsSection from './components/ProjectsSection';
import ServiceLocationsSection from './components/ServiceLocationsSection';
import VideoSection from './components/VideoSection';
import UserStoriesSection from './components/UserStoriesSection';
import BlogsSection from './components/BlogsSection';
import ContactSection from './components/ContactSection';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <HeroSection />
        <WhyChooseSection />
        <ProjectsSection />
        <ServiceLocationsSection />
        <VideoSection />
        <UserStoriesSection />
        <BlogsSection />
        <ContactSection />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;