// components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/quiz", label: "Quiz" },
    { href: "/results", label: "Results" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition"
        >
          QuizQuick ⚡
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium transition ${
                router.pathname === href
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
        >
          {menuOpen ? (
            <XIcon className="h-7 w-7" />
          ) : (
            <MenuIcon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Nav with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white/90 backdrop-blur-md shadow-inner px-6 py-4 space-y-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block font-medium ${
                router.pathname === href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
