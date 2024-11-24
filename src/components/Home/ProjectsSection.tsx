import { Card } from "../ui/Card";
// import project1 from "../../assets/images/projects/project1.png";
import project2 from "../../assets/images/projects/project2.png";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectSection: React.FC = () => {
  const projectsData = [
    {
      id: "",
      images: [project2],
      heading: "Book my show clone",
      description:
        "It is a replica of the popular online ticket booking platform, BookMyShow.",
      skills: ["ReactJS", "Tailwind CSS", "Razorpay API"],
      points: ["", "", ""],
      link: "",
    },
    {
      id: "",
      images: [project2],
      heading: "projects data",
      description:
        "It is a replica of the popular online ticket booking platform, BookMyShow. lorem ipson lorem lorem ipson loremlorem ipson loremlorem ipson lorem.",
      skills: ["ReactJS", "Tailwind CSS", "Razorpay API"],
      points: ["", "", ""],
      link: "",
    },
    {
      id: "",
      images: [project2],
      heading: "",
      description: "",
      skills: ["ReactJS", "NodeJS", "Razorpay API"],
      points: ["", "", ""],
      link: "",
    },
  ];
  const [hovering, setHovering] = useState(false);
  return (
    <section className="p-section-xl relative text-green_yellow">
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative inline-block overflow-hidden"
      >
        <span className="relative bg-transparent font-tusker uppercase z-10 text-tusker-subheading2 px-2 ">
          Projects I've worked on
        </span>
        <span
          className={`${
            hovering ? "z-20 text-black" : "z-20"
          } absolute top-0 left-0 font-tusker uppercase text-tusker-subheading2 px-2  bg-transparent `}
        >
          Projects I've worked on
        </span>
        <motion.div
          initial={{ x: -800 }}
          animate={{ x: hovering ? 0 : -800 }}
          transition={{
            type: "spring",
            stiffness: 300, // Increased stiffness for faster transition
            damping: 20, // Reduced damping for snappier effect
          }}
          className="bg-green_yellow w-full h-full absolute top-0 left-0"
        ></motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: hovering ? 800 : 0 }}
          transition={{
            type: "spring",
            stiffness: 300, // Increased stiffness for faster transition
            damping: 20, // Reduced damping for snappier effect
          }}
          className="bg-black w-full z-0 h-full absolute top-0 left-0"
        ></motion.div>
      </div>
      <br />
      <div className="grid grid-cols-3 gap-7 mt-12 px-section-xl">
        {projectsData.map((project, projectIndex) => {
          return (
            <Card
              key={`projectCard-${projectIndex}`}
              projectDetails={project}
            />
          );
        })}
      </div>
      <div className="pt-10 flex items-center justify-center">
        <Button
          onClick={() => {
            // navigate("/projects")
          }}
          type="button"
          label="View more"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
