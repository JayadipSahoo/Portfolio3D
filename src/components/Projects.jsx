import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const projects = [
  {
    name: "Health Care Plus",
    description: "A healthcare appointment scheduling system built with JavaScript, React, Node.js, Express, and MongoDB. Features include appointment booking, admin portal for doctors, Twilio API integration for SMS notifications, and JWT authentication.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Twilio"],
    image: "/projects/healthcare.png",
    source_code_link: "https://github.com/JayadipSahoo/Healthcare"
  },
  {
    name: "Blue Emerald",
    description: "A modern banking application using React, Plaid, Node.js, Express, and Appwrite. Allows users to link accounts, monitor balances, perform transactions, and view detailed transaction history with filtering options.",
    tags: ["Next.js", "Node.js", "Plaid", "Appwrite"],
    image: "/projects/banking.png",
    source_code_link: "https://github.com/JayadipSahoo/Blue-Emerald"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative flex flex-col lg:flex-row w-full p-4 sm:p-6"
    >
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h4 className="project-title text-sm font-medium mb-2">Featured Project</h4>
        <h3 className="project-name text-white font-black md:text-[30px] sm:text-[26px] xs:text-[20px] text-[18px]">
          {project.name}
        </h3>
        
        <div className="bg-white/5 backdrop-blur-md mt-4 p-6 rounded-xl relative z-10 lg:max-w-[130%] lg:translate-x-[15%] shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <p className="text-[#E6F1FF] text-[14px] leading-[26px]">
            {project.description}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag text-[14px] text-blue-300">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-4 flex gap-4">
            <a 
              href={project.source_code_link} 
              target="_blank"
              rel="noopener noreferrer"
              className="project-link text-blue-300 hover:text-white transition-colors"
            >
              View Code
            </a>
            
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <div className="project-image-container w-full h-[300px] lg:h-[400px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div variants={textVariant()} className="mb-20">
          <h2 className="text-[#E6F1FF] text-8xl font-bold text-center">
            Projects
          </h2>
        </motion.div>

        <div className="w-full flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects"); 