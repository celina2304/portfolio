// import { useState } from "react";
import { motion } from "framer-motion";
import { FunctionalComponentProps } from "../../types/components";

// constants
import skills from "../../constants/skills";

const SkillsSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  // const [activeSkill, setActiveSkill] = useState<number>(-1);

  return (
    <section
      id={id}
      className="relative text-primary-accent"
    >
      <motion.h2 initial={{
        y: 10,
        opacity: 0
      }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8
        }} className="heading">
        Skills I have
      </motion.h2>
      <br />
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-6 md:px-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              y: 10,
              opacity: 0
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: (index + 1) * 0.07,
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.8
            }}
            className="flex flex-col items-center"
          >
            <img src={skill.icon} loading="lazy" alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            <p className="mt-2 text-sm md:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
