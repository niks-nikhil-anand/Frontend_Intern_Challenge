"use client";
import { JourneyData } from "@/constants";
import React from "react";


const AboutSection = () => {
  return (
    <section
      className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800 px-6"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-16">
          <div className="h-1 w-10 bg-blue-500 mr-4 rounded-full"></div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Journey
          </h2>
          <div className="h-1 w-10 bg-purple-500 ml-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">About Me</h3>
            <p className="text-gray-300 mb-4">
              I'm Nikhil Anand, a passionate Full Stack Developer with expertise
              in building real-world, scalable web applications. I have
              successfully delivered 4+ freelance full-stack projects, working
              closely with clients to solve practical problems through
              technology.
            </p>
            <p className="text-gray-300 mb-4">
              My journey into tech began out of a strong desire to earn
              independently. Back in the pre-lockdown days, using a refurbished
              laptop worth ₹7000, I built my first website on WordPress for a
              client — a turning point that fueled my passion for web
              development.
            </p>
            <p className="text-gray-300 mb-4">
              Since then, I have expanded my skills into modern technologies
              like React, Next.js, Node.js, and various cloud services, creating
              efficient, user-friendly applications that deliver real value to
              businesses.
            </p>
            <p className="text-gray-300 mb-4">
              These days, I am deeply excited about the future of SaaS-based AI
              platforms and actively learning more about how AI can
              revolutionize the web development space.
            </p>
            <p className="text-gray-300">
              Talking about frontend — I genuinely love designing beautiful,
              intuitive user interfaces that captivate users at first sight. My
              goal is always to craft experiences that both clients and their
              audiences instantly fall in love with.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            {/* Journey Steps */}
            <div className="space-y-12 pl-16">
              {JourneyData.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Icon */}
                  <div className="absolute -left-8 flex items-center justify-center w-16 h-16">
                    <div className="absolute w-10 h-10 bg-gray-800 border-2 border-blue-500 rounded-full flex items-center justify-center z-10">
                      <div className="text-blue-400">{step.icon}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
                    <div className="text-sm font-semibold text-blue-400 mb-1">
                      {step.year}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
