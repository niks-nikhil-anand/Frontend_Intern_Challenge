"use client";

import { skills } from "@/constants";
import React from "react";
import { FaCode, FaDatabase, FaLayerGroup, FaNetworkWired, FaPalette, FaServer } from "react-icons/fa";
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiDocker } from "react-icons/si";

const SkillsSections = () => {
  // Map skill items to their corresponding icons
  const getItemIcon = (item) => {
    const iconMap = {
      "javascript": <SiJavascript className="w-4 h-4" />,
      "react": <SiReact className="w-4 h-4" />,
      "node.js": <SiNodedotjs className="w-4 h-4" />,
      "python": <SiPython className="w-4 h-4" />,
      "docker": <SiDocker className="w-4 h-4" />
    };

    // Check if any key in the map is included in the item (case insensitive)
    const matchedKey = Object.keys(iconMap).find(key => 
      item.toLowerCase().includes(key.toLowerCase())
    );
    
    return matchedKey ? iconMap[matchedKey] : null;
  };

  // Map category names to their corresponding icons
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <FaPalette className="w-6 h-6" />;
      case "backend":
        return <FaServer className="w-6 h-6" />;
      case "languages":
        return <FaCode className="w-6 h-6" />;
      case "databases":
        return <FaDatabase className="w-6 h-6" />;
      case "devops":
        return <FaNetworkWired className="w-6 h-6" />;
      default:
        return <FaLayerGroup className="w-6 h-6" />;
    }
  };

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-16">
          <div className="h-1 w-10 bg-blue-500 mr-4 rounded-full"></div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Skills
          </h2>
          <div className="h-1 w-10 bg-purple-500 ml-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-blue-400 mr-4 group-hover:bg-blue-500/20 transition-all duration-300">
                  {getCategoryIcon(skillCategory.category)}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {skillCategory.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center py-2 px-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 border border-gray-700/50 hover:border-blue-500/30 text-gray-300 hover:text-white"
                  >
                    {getItemIcon(item) ? (
                      <div className="mr-2 text-blue-400">
                        {getItemIcon(item)}
                      </div>
                    ) : (
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    )}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSections;