import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin} from "lucide-react";

const Location: React.FC = () => {
  return (
    <section className="bg-[#fcfbf8] dark:bg-secondary dark:from-black dark:to-gray-950 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Info Card */}
        <div className="relative w-full bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl">
          {/* Logo + Title */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src="../src/assets/logos/logo.png"
              className="h-10"
              alt="Axisol Logo"
            />
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Axisol
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium mb-8">
            Delivering Savings Through the Roof!
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 w-full my-6">
            <span className="flex-1 border-t border-gray-300 dark:border-gray-600"></span>
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Get in touch
            </h3>
            <span className="flex-1 border-t border-gray-300 dark:border-gray-600"></span>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-sm md:text-base">
            <p className="flex items-center gap-3 justify-center text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold">Location:</span>
              <span className="text-primary dark:text-primary">
                811 Gold Crest, 8th Floor, L T Road, Borivali West, Mumbai.
              </span>
            </p>

            <p className="flex items-center gap-3 justify-center text-gray-700 dark:text-gray-300">
              <Mail className="w-5 h-5 text-primary dark:text-primary" />
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:sales@axistechinfra.com"
                className="text-primary dark:text-primary hover:underline"
              >
                sales@axistechinfra.com
              </a>
            </p>

            <p className="flex items-center gap-3 justify-center text-gray-700 dark:text-gray-300">
              <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="font-semibold">Phone:</span>
              <a
                href="tel:+918850196164"
                className="text-primary dark:text-primary hover:underline"
              >
                +91 88501 96164
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 w-full my-6">
            <span className="flex-1 border-t border-gray-300 dark:border-gray-600"></span>
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap flex items-center gap-2">
              Socials
            </h3>
            <span className="flex-1 border-t border-gray-300 dark:border-gray-600"></span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 justify-center">
            {[
              { icon: Facebook, color: "hover:text-blue-600", link:"https://www.facebook.com/share/1E2Vvcy7Nv/" },
              { icon: Instagram, color: "hover:text-pink-500", link: "https://www.instagram.com/axisol.solar?igsh=MWM3aGRzNmhiaDM0OA=="},
              { icon: Linkedin, color: "hover:text-blue-700", link: "https://www.linkedin.com/in/axisol-solar-101402318/"},
            ].map(({ icon: Icon, color, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                className={`text-gray-600 dark:text-gray-400 transition-transform duration-300 transform hover:-translate-y-2 ${color}`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-[#1e253a]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.659991421949!2d72.82615867523565!3d19.361259045334845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05c063d0109%3A0x4090a35d9e395c0!2sGold%20Crest%20Business%20Center!5e0!3m2!1sen!2sin!4v1694767890123!5m2!1sen!2sin"
            width="100%"
            height="460"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
