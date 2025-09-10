import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProjectsSection from "./components/ProjectsSection";
import ServiceLocationsSection from "./components/ServiceLocationsSection";
import VideoSection from "./components/VideoSection";
import UserStoriesSection from "./components/UserStoriesSection";
import BlogsSection from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import Chatbot from "./components/Chatbot";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

// ✅ Create a wrapper so we can use the theme context inside
const AppContent: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header with theme toggle */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <Header />
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm font-medium shadow hover:scale-105 transition"
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Sections */}
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
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
