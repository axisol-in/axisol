import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <section className="w-screen min-h-16 bg-black text-white flex flex-col md:flex-row md:justify-center items-start md:items-center text-left px-6 py-1 md:px-4 gap-1 md:gap-5">
      <NavLink to="/">Axisol © 2025</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blogs">Blogs </NavLink>
      <NavLink to="/terms-of-use">Terms & Conditions</NavLink>
      <NavLink to="/privacy-policy">Piracy Policy</NavLink>
    </section>
  );
};

export default Footer;
