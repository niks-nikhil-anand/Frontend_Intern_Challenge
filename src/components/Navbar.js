"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaHome,
  FaUser,
  FaLaptopCode,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-lg shadow-lg shadow-blue-500/5"
            : "bg-gray-900/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-60 blur-sm group-hover:opacity-100 transition duration-300"></div>
              <Image
                src="/profile.jpeg"
                alt="Nikhil Anand"
                width={40}
                height={40}
                className="rounded-full relative border border-blue-400/30"
              />
            </div>
            <Link href={"/"}>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Nikhil Anand
            </span>
            </Link>
            
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <Link
              href={"/"}
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              <FaHome className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="relative overflow-hidden">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>

            <Link
              href={"/AboutUs"}
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              <FaUser className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="relative overflow-hidden">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>

            <Link
              href={"/Projects"}
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              <FaLaptopCode className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="relative overflow-hidden">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>

            <Link
              href="/MyResume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-full transition-all shadow-md hover:shadow-blue-500/30"
            >
              <FaDownload className="animate-bounce" />
              Resume
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/80 border border-gray-700"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-gray-800/90 backdrop-blur-lg border-t border-gray-700/50 gap-5 mb-5">
            <Link
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors"
            >
              <FaHome className="text-blue-400" />
              Home
            </Link>

            <Link
              href={"/AboutUs"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors"
            >
              <FaUser className="text-blue-400" />
              About Us
            </Link>

            <Link
              href={"/Projects"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors"
            >
              <FaLaptopCode className="text-blue-400" />
              Projects
            </Link>

            <Link
              href="/MyResume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-2 rounded-full w-4/5 justify-center"
            >
              <FaDownload />
              Download Resume
            </Link>
          </div>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
