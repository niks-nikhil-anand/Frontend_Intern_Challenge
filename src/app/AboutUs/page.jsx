"use client";
import React from "react";
import { FaCode, FaGraduationCap, FaBriefcase, FaLaptopCode, FaRocket } from "react-icons/fa";

const AboutSection = () => {
  const journeySteps = [
    {
      year: "2022",
      title: "Started Coding Journey",
      description: "Began learning programming fundamentals with JavaScript, building small projects to understand core concepts.",
      icon: <FaCode />
    },
    {
      year: "2023",
      title: "Computer Science Degree",
      description: "Graduated with a degree in Computer Science, focusing on algorithms, data structures, and web development technologies.",
      icon: <FaGraduationCap />
    },
    {
      year: "2021",
      title: "First Developer Role",
      description: "Joined a startup as a Junior Developer, where I worked on front-end development using React and gained practical industry experience.",
      icon: <FaBriefcase />
    },
    {
      year: "2022",
      title: "Full Stack Transition",
      description: "Expanded my skills to include back-end development with Node.js, Express, and MongoDB, becoming a Full Stack Developer.",
      icon: <FaLaptopCode />
    },
    {
      year: "2023 - Present",
      title: "Advanced Projects & Growth",
      description: "Leading development on scalable web applications, implementing CI/CD pipelines, and exploring cloud services like AWS and Docker.",
      icon: <FaRocket />
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800 px-6" id="about">
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
              I'm Nikhil Anand, a passionate Full Stack Developer with expertise in building scalable web applications. My journey in the tech world began with a curiosity about how websites work, which led me to explore the vast realm of web development.
            </p>
            <p className="text-gray-300 mb-4">
              My approach combines technical excellence with creative problem-solving. I enjoy working with modern technologies like React, Next.js, Node.js, and cloud services to create efficient, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs. I believe in continuous learning and staying updated with the latest industry trends.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            {/* Journey Steps */}
            <div className="space-y-12 pl-16">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Icon */}
                  <div className="absolute -left-8 flex items-center justify-center w-16 h-16">
                    <div className="absolute w-10 h-10 bg-gray-800 border-2 border-blue-500 rounded-full flex items-center justify-center z-10">
                      <div className="text-blue-400">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
                    <div className="text-sm font-semibold text-blue-400 mb-1">{step.year}</div>
                    <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
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