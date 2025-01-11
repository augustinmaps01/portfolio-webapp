"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-100 shadow-lg h-16">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-semibold font-edu text-white"
        >
          Augustin Maps
        </Link>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleNavbar}
            className="p-2 text-slate-200 hover:text-white focus:outline-none"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="hover:text-gray-400 transition-colors">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      {isOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
