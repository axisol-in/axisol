import React, { useState } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projets" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-[80%] ml-[10%] mt-5 pl-10 pr-10 z-50 backdrop-blur-lg shadow-2xl transition-colors duration-300 rounded-full">
      <div className="flex justify-between items-center h-16">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-off-white hover:bg-light-cream dark:hover:bg-slate-blue transition-colors"
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
        <nav className="hidden md:flex items-center space-x-8">
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
          className="p-2 rounded-md text-primary dark:text-off-white transition-all hover:scale-125 dark:hover:text-primary hover:text-white"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-surface dark:bg-very-dark-green shadow-lg border-t border-light-gray-green dark:border-slate-blue">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-deep-navy dark:text-off-white hover:bg-light-cream dark:hover:bg-slate-blue rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
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
                      setIsThemeDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-neutral dark:text-medium-gray hover:bg-light-cream dark:hover:bg-slate-blue rounded-md"
                  >
                    Light Theme
                  </button>
                  <button
                    onClick={() => {
                      if (!isDark) toggleTheme();
                      setIsThemeDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm text-neutral dark:text-medium-gray hover:bg-light-cream dark:hover:bg-slate-blue rounded-md"
                  >
                    Dark Theme
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
