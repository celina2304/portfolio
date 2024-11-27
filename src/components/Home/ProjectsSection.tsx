import { Card } from "../ui/Card";
// import project1 from "../../assets/images/projects/project1.png";
import project2 from "../../assets/images/projects/project2.png";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
// import { motion } from "framer-motion";
import Blob from "../ui/Blob";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FunctionalComponentProps } from "../../types/components";
import { useEffect, useState } from "react";

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

const ProjectSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  const scroll = useSelector((state: RootState) => state.scroll.scrollY);
  // const { innerWidth } = useSelector((state: RootState) => state.dimensions);
  const sectionDetails = useSelector(
    (state: RootState) => state.sectionScroll.sections
  );
  const [translateVal, setTranslateVal] = useState<string>("");
  const currentSection = sectionDetails.find((item) => item.sectionId === id);

  useEffect(() => {
    const calculateTranslateVal = () => {
      if (
        currentSection !== undefined &&
        scroll >= currentSection.startPosition - currentSection.sectionHeight &&
        scroll <= currentSection.endPosition + currentSection.sectionHeight
      ) {
        const baseScroll = currentSection.sectionHeight;
        const effectiveScroll = (scroll - baseScroll) / 7;

        setTranslateVal(`translateY(${effectiveScroll}px)`);
      }
    };
    calculateTranslateVal();
  }, [currentSection, scroll]);

  return (
    <section
      id={id}
      className="p-section-mobile md:p-section-xl 2xl:p-section-2xl  relative overflow-x-clip overflow-y-visible text-green_yellow"
    >
      <div className="relative bg-transparent z-20">
        <span className="bg-transparent font-tusker uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 2xl:text-tusker-heading md:px-2 ">
          Projects I've worked on
          <ArrowRightIcon className="h-[80px] fill-green_yellow bg-transparent w-auto inline" />
        </span>
        <br />
        <div className="bg-transparent grid grid-rows-4 md:grid-rows-none md:grid-cols-4 gap-5 mt-5 md:mt-12">
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
        <div className="pt-10 bg-transparent flex items-center justify-center">
          <Button
            onClick={() => {
              // navigate("/projects")
            }}
            type="button"
            label="View more"
          />
        </div>
      </div>
      <div
        style={{
          transform: `${translateVal} scale(1.6) `,
        }}
        className="absolute -top-[50vw] sm:-top-[90vw] md:-top-[60vw] lg:-top-[60vw] xl:-top-[20vw] -right-5 md:right-16 z-10 w-[100px] h-[100px] bg-transparent"
      >
        <Blob variant={1} />
      </div>
      <div
        style={{
          transform: `${translateVal} scale(1.6) `,
        }}
        className="absolute bottom-[140vw] sm:bottom-[100vw] md:bottom-[90vw] lg:bottom-[70vw] xl:bottom-[30vw] -left-[200px] md:-left-16 z-10 w-[100px] h-[100px] bg-transparent"
      >
        <Blob variant={2} />
      </div>
    </section>
  );
};

export default ProjectSection;
