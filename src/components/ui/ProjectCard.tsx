import { useEffect, useState } from "react";
import { projectCardProps } from "../../types/components";
import { motion } from "framer-motion";
import "./Card.css";
import Chevron from "./Chevron";

const ProjectCard: React.FC<projectCardProps> = (props) => {
  const { projectDetails } = props;
  const [hovering, setHovering] = useState<boolean>(false);
  const [animationOn, setAnimationOn] = useState<boolean>(false);

  useEffect(() => {
    if (hovering) {
      setAnimationOn(true);
      setTimeout(() => {
        setAnimationOn(false);
      }, 1000); // (1 second)
    } else {
      setAnimationOn(false);
    }
  }, [animationOn, hovering]);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative flex flex-col max-w-sm rounded overflow-hidden shadow-lg"
    >
      <img
        className="w-full relative z-20"
        src="https://tailwindcss.com/img/card-top.jpg"
        // src={projectDetails.images[0]}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 relative flex flex-col flex-grow overflow-hidden">
        <div
          className={`font-bold text-xl bg-green_yellow relative z-30 mb-2 bg-clip-text text-transparent`}
        >
          {projectDetails.heading}
        </div>
        <p
          className={`bg-green_yellow text-base relative z-20 bg-clip-text text-transparent`}
        >
          {projectDetails.description}
        </p>
        <motion.div
          key={hovering ? "hovering" : "not-hovering"} // Change key based on hovering state
          className="absolute w-full h-full bg-transparent top-0 left-0 z-10"
          initial={{ y: 100 }}
          animate={{
            y: hovering ? -280 : 100,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <Chevron
            cls={`${
              hovering
                ? "absolute top-0 left-0 z-10 bg-transparent"
                : "hidden bg-transparent"
            } `}
            fill="#b0fe76"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
