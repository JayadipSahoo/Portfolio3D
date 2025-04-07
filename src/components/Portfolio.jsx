import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({
  index,
  category,
  skills,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full flex flex-col gap-4"
    >
      <h3 className="text-white font-medium text-[20px] sm:text-[24px] md:text-[28px]">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="bg-tertiary px-4 py-2 rounded-xl text-[14px] sm:text-[16px] text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [ "C","C++", "JavaScript", "Python", "Java"],
    },
    {
      category: "Web Technologies",
      skills: ["Node.js", "Express.js", "React.js", "Appwrite", "HTML", "CSS", "Next.js", "Tailwind CSS", "Bootstrap", "Material UI"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "SQL", "MSSQL"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "VSCode", "GitHub", "MongoDB Atlas", "Docker", "AWS"],
    },
  ];

  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Skills</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10">
        {skillCategories.map((category, index) => (
          <SkillCard key={`skill-${index}`} index={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
