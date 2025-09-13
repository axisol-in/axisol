import React, { useState } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logos/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projets" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-5 w-[90%] lg:w-[80%] pl-10 pr-10 z-40 backdrop-blur-lg shadow-2xl transition-colors duration-300 rounded-full">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-off-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <img className="h-7" src={logo} />
              <span className="text-2xl font-bold text-primary dark:text-bright-orange">
                AXISOL
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:space-x-12 md:space-x-8">
            <NavLink
              to="/"
              className="text-off-white hover:text-primary dark:hover:text-bright-orange transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="text-off-white hover:text-primary dark:hover:text-bright-orange transition-colors"
            >
              Projects
            </NavLink>

            <NavLink
              to="/blogs"
              className="text-off-white hover:text-primary dark:hover:text-bright-orange transition-colors"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className="text-off-white hover:text-primary dark:hover:text-bright-orange transition-colors"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-off-white hover:text-primary dark:hover:text-bright-orange transition-colors"
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-primary dark:text-off-white hover:scale-110 transition-transform dark:hover:text-primary hover:text-white max-md:opacity-0 max-md:pointer-events-none"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-[100vw] h-[100vh] md:hidden fixed top-0 left-0 z-50 bg-surface dark:bg-very-dark-green shadow-lg ">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-secondary dark:text-off-white block px-3 pt-10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-deep-navy dark:text-off-white hover:bg-light-cream dark:hover:bg-slate-blue rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-deep-navy dark:text-off-white hover:bg-light-cream dark:hover:bg-slate-blue rounded-md transition-colors"
              >
                Theme
                <ChevronDown size={16} />
              </button>
              {isThemeDropdownOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      if (isDark) toggleTheme();
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-neutral dark:text-medium-gray rounded-md"
                  >
                    Light Theme
                  </button>
                  <button
                    onClick={() => {
                      if (!isDark) toggleTheme();
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-neutral dark:text-medium-gray rounded-md"
                  >
                    Dark Theme
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
