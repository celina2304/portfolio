import React from "react";
import { motion } from "framer-motion";
import { projectCardProps } from "../../types/components";
import "./Card.css";

export const Card: React.FC<projectCardProps> = (props) => {
  const { projectDetails, index = 1 } = props;

  return (
    <motion.div
      key={`project-card${index}`}
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: (index + 1) * 0.1, // Delay applied only when the element is in view
      }}
      className={`min-h-full`}
    >
      <div className="cursor-pointer hover:scale-[1.01] duration-200 ease-in-out hover:shadow-projectCard relative min-h-full flex flex-col max-w-sm 2xl:max-w-screen-2xl border-2 border-green_yellow">
        <img
          className="w-full border-b-2 border-green_yellow"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="p-3 relative flex flex-col flex-grow overflow-hidden">
          <div
            className={`font-bold font-tusker uppercase text-xl 2xl:text-tusker-home-text-mobile bg-green_yellow relative z-30 mb-2 bg-clip-text text-transparent`}
          >
            {projectDetails.heading}
          </div>
          <p
            className={`bg-green_yellow relative z-20 bg-clip-text text-xs 2xl:text-3xl text-transparent`}
          >
            {projectDetails.description}
          </p>
        </div>
        <div className="p-3 flex gap-2 items-center flex-wrap justify-start ">
          {projectDetails.skills.map((skill, skillIndex) => (
            <span
              key={`project-card${index}-skill${skillIndex}`}
              className="bg-green_yellow text-black rounded-md 2xl:text-3xl p-1 text-xs font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
