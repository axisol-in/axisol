import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [sectionTheme, setSectionTheme] = useState<"light" | "dark">("light");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer → detect section theme
  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentTheme =
              entry.target.getAttribute("data-theme") || "light";
            setSectionTheme(currentTheme as "light" | "dark");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-5 w-[90%] lg:w-[80%] pl-10 pr-10 z-40 backdrop-blur-lg shadow-2xl transition-colors duration-300 rounded-full
          ${scrolled ? "bg-white/90 dark:bg-black/80" : "bg-transparent"}
          ${sectionTheme === "light" ? "text-" : "text-grey-500"}
        `}
      >
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <img
                className="h-7"
                src="https://axisol.in/wp-content/uploads/2024/12/cropped-cropped-Axisol-Logo-1-300x134.png"
              />
              <span className="text-2xl font-bold text-primary dark:text-bright-orange">
                AXISOL
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:space-x-12 md:space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="hover:text-primary dark:hover:text-bright-orange transition-colors"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:scale-110 transition-transform"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-[100vw] h-[100vh] md:hidden fixed top-0 left-0 z-50 bg-surface dark:bg-very-dark-green shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md block px-3 pt-10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="block px-3 py-2 hover:bg-light-cream dark:hover:bg-slate-blue rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
