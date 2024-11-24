import React from "react";
import { motion } from "framer-motion";
import { projectCardProps } from "../../types/components";
import "./Card.css";

export const Card: React.FC<projectCardProps> = (props) => {
  const { projectDetails } = props;

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 0px 13px 3px #b0fe76",
      }}
      transition={{
        type: "spring",
        stiffness: 300, // Increased stiffness for faster transition
        damping: 20, // Reduced damping for snappier effect
      }}
      className={`relative flex flex-col max-w-sm border-2 border-green_yellow `}
    >
      <img
        className="w-full border-b-2 border-green_yellow"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="p-3 relative flex flex-col flex-grow overflow-hidden">
        <div
          className={`font-bold font-tusker uppercase text-xl bg-green_yellow relative z-30 mb-2 bg-clip-text text-transparent`}
        >
          {projectDetails.heading}
        </div>
        <p
          className={`bg-green_yellow relative z-20 bg-clip-text text-sm text-transparent`}
        >
          {projectDetails.description}
        </p>
      </div>
      <div className="p-3 flex gap-2 items-center justify-start ">
        {projectDetails.skills.map((skill) => (
          <span className="bg-green_yellow text-black rounded-md p-1 text-xs font-semibold">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
