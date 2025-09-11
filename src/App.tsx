import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Chatbot from "./components/Chatbot";

// import HeroSection from "./components/HeroSection";
// import WhyChooseSection from "./components/WhyChooseSection";
// import ProjectsSection from "./components/ProjectsSection";
// import ServiceLocationsSection from "./components/ServiceLocationsSection";
// import VideoSection from "./components/VideoSection";
// import UserStoriesSection from "./components/UserStoriesSection";
// import BlogsSection from "./components/BlogsSection";

import { ThemeProvider } from "./context/ThemeContext";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import BlogsPage from "./pages/Blogs";

const AppContent: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="flex justify-center">
          <Header />
        </div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
        <Chatbot />
      </div>
    </BrowserRouter>
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
