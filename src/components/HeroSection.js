"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaRoute } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="flex justify-center relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 blur-md group-hover:opacity-100 transition duration-300"></div>
          <div className="relative">
            <Image
              src="/profile.jpeg"
              alt="Nikhil Anand"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg border-2 border-blue-400/30 z-10"
            />
            <div className="absolute inset-0 bg-blue-500/10 rounded-full z-20"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="h-1 w-10 bg-blue-500 mr-4 rounded-full hidden md:block"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Hi, I&apos;m Nikhil Anand 👋
            </h1>
          </div>

          <p className="text-gray-300 text-lg mb-8 max-w-xl backdrop-blur-sm bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
            Full Stack Developer | Passionate about building scalable web apps
            and solving real-world problems using cutting-edge technology.
            Currently focusing on React.js, Next.js, Node.js, Docker, and AWS.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="/MyResume.pdf" download>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition flex items-center justify-center gap-2 group">
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </button>
            </Link>
            <Link href={"/AboutUs"}>
              <button className="px-6 py-3 border border-purple-500/50 text-purple-300 rounded-full hover:bg-purple-500/10 transition flex items-center justify-center gap-2">
                <FaRoute />
                My Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
