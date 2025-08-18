import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

//icons
import { ArrowRightIcon } from "@heroicons/react/16/solid";

// types and constants
import { FunctionalComponentProps } from "../../types/components";
import projectsData from "../../constants/projects";

// ui components
import { Card } from "../ui/Card";


const ProjectSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  const projectRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start start", "end start"]
  });

  const translateVal = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section
      id={id}
      ref={projectRef}
      className="p-section-mobile md:p-section-xl relative"
    >
      <motion.div style={{ y: translateVal }} className="relative z-20">
        <motion.h2 initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className="heading">
          Projects I've worked on
          <ArrowRightIcon className="h-11 fill-primary-accent  w-auto inline" />
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-3 gap-5">
          {projectsData.map((project, projectIndex) => {
            return (
              <Card
                key={`projectCard-${projectIndex}`}
                projectDetails={project}
                index={projectIndex}
              />
            );
          })}
        </div>
        {/* <div className="pt-10  flex items-center justify-center">
          <Button
            onClick={() => {
              // navigate("/projects")
            }}
            type="button"
            label="View more"
          />
        </div> */}
      </motion.div>

    </section>
  );
};

export default ProjectSection;
