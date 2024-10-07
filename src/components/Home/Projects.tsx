import { motion } from "framer-motion";
import ProjectCard from "../Projects/ProjectCard";

export default function Projects() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  return (
    <div className="w-full h-full relative border border-white">
      <motion.div
        className="bg-white h-[100px] w-[100px]"
        drag
        dragConstraints={{
          top: 100,
          left: 100,
          right: width - 200,
          bottom: height - 200,
        }}
      />
      <motion.div
        className="bg-white h-[100px] w-[100px]"
        drag
        dragConstraints={{
          top: 100,
          left: 100,
          right: width - 200,
          bottom: height - 200,
        }}
      />
      <div className="col-span-1">Projects</div>
      <div className="col-span-2">
        <ProjectCard bg="bg-blue-500" />
      </div>
    </div>
  );
}
