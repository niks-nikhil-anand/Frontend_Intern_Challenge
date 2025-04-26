"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-gray-800">MyLogo</div>
          {/* Desktop menu starts from here ...... */}
          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <Link href={"/"} className="hover:text-black hover:underline">
              Home
            </Link>
            <Link href={"/AboutUs"} className="hover:text-black hover:underline">
              About Us
            </Link>
            <Link href={"/Projects"} className="hover:text-black hover:underline">
              Projects
            </Link>
            <Link
              href="/MyResume.pdf"
              download
              className="hover:text-black text-white font-medium bg-black px-4 py-2 rounded-md"
            >
              Download Resume
            </Link>
          </div>

          {/* Mobile Menu Icon......... */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu starts from here........ */}

        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 shadow-md">
            <Link
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="hover:text-black text-gray-600 font-medium"
            >
              Home
            </Link>
            <Link
              href={"/AboutUs"}
              onClick={() => setIsOpen(false)}
              className="hover:text-black text-gray-600 font-medium"
            >
              About Us
            </Link>
            <Link
              href={"/Projects"}
              onClick={() => setIsOpen(false)}
              className="hover:text-black text-gray-600 font-medium"
            >
              Projects
            </Link>
            <Link
              href="/MyResume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="hover:text-black text-white font-medium bg-black px-4 py-2 rounded-md "
            >
              Download Resume
            </Link>
          </div>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
