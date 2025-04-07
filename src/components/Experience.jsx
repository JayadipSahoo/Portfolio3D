import { motion } from "framer-motion";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const experiences = [
  {
    company: "EstateLink Solutions",
    location: "Remote",
    role: "Full Stack Web Developer",
    date: "05/2024 - 08/2024",
    
    
    details: [
      "Built and maintained RESTful APIs using Express for efficient backend.",
      "Implemented JWT for secure and scalable user authentication.",
      "Collaborated with frontend developers to ensure seamless API integration.",
    ]
    
  },
  {
    company: "Tech Society",
    location: "Bhubaneswar",
    role: "Full Stack Web Developer",
    date: "07/2023 - 09/2023",
    details: [
      "Developed and maintained the college Tech Society website using HTML5, CSS3, JavaScript, and NEXT.js",
      "Created a platform for users interested in learning and staying up to date with the latest web technologies",
      "Created a website for people passionate about learning and staying up to date with the latest web technologies"
    ]
  }
];

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative flex items-center justify-center w-full md:mb-16 mb-8"
    >
      {/* Mobile layout (stacked) */}
      <div className="md:hidden w-full px-4">
        <div className="relative pl-8 pb-8">
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-quaternary" />
          <div className="absolute left-1.5 top-5 w-0.5 h-full bg-quaternary opacity-50" />
          <div className="bg-tertiary p-4 rounded-lg shadow-xl">
            <h3 className="text-quaternary font-bold text-lg mb-1">{experience.company}</h3>
            <p className="text-white text-sm mb-1">{experience.location}</p>
            <p className="text-white font-medium mb-2">{experience.role}</p>
            <p className="text-slate-400 text-sm mb-3">{experience.date}</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1.5">
              {experience.details.map((detail, idx) => (
                <li key={idx} className="text-sm leading-relaxed">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop layout (alternating) */}
      <div className="hidden md:flex w-full items-center">
        <div className={`w-1/2 ${isEven ? 'pr-12 lg:pr-16 text-right' : 'pl-12 lg:pl-16 text-left ml-auto'}`}>
          <div 
            className={`timeline-card ${isEven ? 'timeline-card-left' : 'timeline-card-right'} 
                       bg-tertiary p-6 rounded-xl shadow-xl hover:shadow-2xl 
                       transition-all duration-300 ease-out`}
          >
            <h3 className="text-quaternary font-bold text-xl mb-2 font-poppins">{experience.company}</h3>
            <p className="text-white text-sm mb-1">{experience.location}</p>
            <p className="text-white font-medium text-lg mb-3">{experience.role}</p>
            <p className="text-slate-400 text-sm mb-4">{experience.date}</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              {experience.details.map((detail, idx) => (
                <li key={idx} className="text-sm leading-relaxed">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className={`timeline-dot w-4 h-4 rounded-full 
                         ${isEven ? 'bg-quaternary' : 'bg-tertiary border-2 border-quaternary'}
                         shadow-lg`} />
          {index !== experiences.length - 1 && (
            <div className="w-0.5 h-32 bg-quaternary opacity-50 mt-4" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center mb-16`}>
          <span className="text-white">My </span>
          <span className="text-quaternary">Work Experience</span>
        </h2>
      </motion.div>

      <div className="timeline-container relative mt-12 md:mt-20">
        <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-quaternary opacity-20 transform -translate-x-1/2" />
        
        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
