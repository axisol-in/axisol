import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { ThemeProvider } from "./context/ThemeContext";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import BlogsPage from "./pages/Blogs";
import BlogPostPage from "./pages/BlogPost";
import TandC from "./pages/TandC";

const AppContent: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-white text-gray-900 dark:text-white transition-colors duration-300">
        <div className="flex justify-center">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route
            path="/terms-of-use"
            element={<TandC title="Terms & Conditions" />}
          />
          <Route
            path="/privacy-policy"
            element={<TandC title="Privacy Policy" />}
          />
        </Routes>
        <Chatbot />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
