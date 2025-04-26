"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
                <div className="flex justify-center">
          <Image
            src="/profile.jpeg" 
            alt="Nikhil Anand"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm Nikhil Anand 👋
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-xl">
            Full Stack Developer | Passionate about building scalable web apps and solving real-world problems using cutting-edge technology. Currently focusing on React.js, Next.js, Node.js, Docker, and AWS.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="/MyResume.pdf" download>
              <button className="px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800 transition">
                Download Resume
              </button>
            </Link>
            <Link href={"/AboutUs"} target="_blank">
              <button className="px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
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
