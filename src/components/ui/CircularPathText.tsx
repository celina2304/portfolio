import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { CirclePathTextProps } from "../../types/components/circularPath";

const CircularPathText: React.FC<CirclePathTextProps> = (props) => {
  const {
    text,
    color = "var(--color-primary-accent)",
    cls,
    direction = "left",
  } = props;
  const [derivedDirection, setDerivedDirection] = useState<string>(direction);

  useEffect(() => {
    setDerivedDirection(direction);
  }, [direction]);
  return (
    <motion.div
      className="absolute w-full h-full"
      animate={{ rotate: derivedDirection === "left" ? 360 : -360 }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      }}
    >
      <svg
        className=" absolute w-full h-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define a circular path */}
        <path
          id="circlePath"
          d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          fill="none"
        />

        {/* Text along the path */}
        <motion.text
          fill={color}
          fontSize="12"
          fontWeight="bold"
          className={`${cls}`}
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </motion.text>
      </svg>
    </motion.div>
  );
};

export default CircularPathText;
