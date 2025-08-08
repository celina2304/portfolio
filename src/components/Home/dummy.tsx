
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// types
import { FunctionalComponentProps } from "../../types/components";

const ParallaxSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  const sectionDetails = useSelector(
    (state: RootState) => state.sectionScroll.sections
  );
  
  const ref = useRef<HTMLDivElement>(null);
  // Refs for parallax layers
  const backgroundRef = useRef<HTMLDivElement>(null);
  const midgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentSection = sectionDetails.find((item) => item.sectionId === id);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0,1], ["-50%", "50%"]);
  const midgroundY = useTransform(scrollYProgress, [0,1], ["-20%", "20%"]);
  const foregroundY = useTransform(scrollYProgress, [0,1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

  return (
    <section
      id={id}
      className="relative w-full h-[150vh] overflow-hidden"
    >
      {/* Sticky container */}
      <motion.div ref={ref} className="sticky bg-transparent top-0 z-20 h-screen overflow-hidden">
        {/* Background layer - slowest movement */}
        <motion.div 
          // ref={backgroundRef}
          style={{y: backgroundY}}
          className="absolute h-screen w-full inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-60"
        />
        
        {/* Midground layer - medium movement */}
        <motion.div 
          // ref={midgroundRef}
          style={{y: midgroundY}}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-96 h-96 rounded-full bg-cyan-500" />
        </motion.div>
        
        {/* Foreground layer - faster movement */}
        <motion.div 
        style={{y:foregroundY}}
          // ref={foregroundRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-64 h-64 rounded-full bg-yellow-300" />
        </motion.div>
        
        {/* Content layer - fastest movement */}
        {/* <div 
          ref={contentRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-gray-800 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
              Parallax
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Scroll to experience the effect of parallax
            </p>
          </motion.div>
        </div> */}
      </motion.div>
      
      {/* Spacer to enable scrolling */}
      <div className="h-[50vh]" />
    </section>
  );
};

export default ParallaxSection;
