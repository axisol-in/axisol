import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <section className="w-screen h-16 bg-black text-white flex justify-center items-center space-x-6">
      <NavLink to="/">Axisol © 2025</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blogs">Blogs </NavLink>
    </section>
  );
};

export default Footer;
