"use client";
import { freelanceProjectsData, projectsData } from "@/constants";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from "react-icons/fa";

const ProjectCard = ({ project, isFreelance = false }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">
          {project.name}
        </h3>
        <div className="flex gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700/50 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
            aria-label="GitHub Repository"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          {isFreelance && project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-500/20 rounded-full hover:bg-blue-500/40 text-blue-400 hover:text-blue-300 transition-all"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-300 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-gray-700/70 text-gray-300 rounded-full border border-gray-600 flex items-center gap-1"
          >
            <FaCode className="w-3 h-3 text-blue-400" />
            {tech}
          </span>
        ))}
      </div>

      {isFreelance && (
        <div className="flex items-center gap-1 mt-4 text-amber-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <section
      className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800 px-6"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-16">
          <div className="h-1 w-10 bg-blue-500 mr-4 rounded-full"></div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Projects
          </h2>
          <div className="h-1 w-10 bg-purple-500 ml-4 rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/70 backdrop-blur-sm p-1 rounded-full flex">
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "personal"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Projects
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "freelance"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab("freelance")}
            >
              Freelance Work
            </button>
          </div>
        </div>

        {/* Personal Projects */}
        {activeTab === "personal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Freelance Projects */}
        {activeTab === "freelance" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freelanceProjectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFreelance={true}
              />
            ))}

            <div className="md:col-span-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mt-6 text-center">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                Need a custom project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Looking for a developer to bring your ideas to life? I'm
                available for freelance projects and would love to discuss how
                we can work together to create something amazing.
              </p>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full transition-all shadow-md hover:shadow-blue-500/30"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
