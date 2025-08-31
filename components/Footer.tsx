// components/Footer.tsx
import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-lg text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} QuizQuick. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-gray-300 transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
