import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        `}
      >
        <div className="flex flex-col md:flex-row items-center justify-center h-16 w-full">
          <div className="flex items-center justify-center w-full md:w-auto">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md absolute left-4 top-1/2 transform -translate-y-1/2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo and Text Centered */}
            <NavLink to="/" className="mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <img className="h-7" src={logo} />
                <span className="text-2xl font-bold text-primary dark:text-bright-orange">
                  AXISOL
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:space-x-12 md:space-x-8 ml-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `hover:text-primary dark:hover:text-bright-orange transition-colors ${
                    isActive ? "text-primary dark:text-bright-orange" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
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
