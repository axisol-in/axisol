import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
          ${scrolled ? "bg-black/80" : "bg-transparent"}
        `}
      >
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {isMenuOpen ? (
              <X
                size={24}
                className="hover:scale-110 transition-transform duration-200"
              />
            ) : (
              <Menu
                size={24}
                className="hover:scale-110 transition-transform duration-200"
              />
            )}
          </button>

          {/* Logo */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <img className="h-7" src={logo} />
              <span className="text-2xl font-bold text-primary">AXISOL</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:space-x-12 md:space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? (
                <Moon size={20} className="text-gray-700" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-[100vw] h-[100vh] md:hidden fixed top-0 left-0 z-50 bg-surface shadow-lg text-medium-gray">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md block px-3 pt-10"
            >
              {isMenuOpen ? (
                <X
                  size={24}
                  className="hover:scale-110 transition-transform duration-200"
                />
              ) : (
                <Menu
                  size={24}
                  className="hover:scale-110 transition-transform duration-200"
                />
              )}
            </button>
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md transition-colors text-5xl hover:text-primary ${
                    isActive ? "text-primary" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 mt-6 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? (
                <Moon size={24} className="text-gray-700" />
              ) : (
                <Sun size={24} className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
