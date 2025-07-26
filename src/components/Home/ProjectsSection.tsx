import { useEffect, useState } from "react";

//icons
import { ArrowRightIcon } from "@heroicons/react/16/solid";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

// types and constants
import { FunctionalComponentProps } from "../../types/components";
import projectsData from "../../constants/projects";

// ui components
import { Card } from "../ui/Card";
import Blob from "../ui/Blob";
import useSectionTranslate from "../../hooks/useSectionTranslate";
// import Button from "../ui/Button";


const ProjectSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  // const { innerWidth } = useSelector((state: RootState) => state.dimensions);
  const sectionDetails = useSelector(
    (state: RootState) => state.sectionScroll.sections
  );
  const [translateVal, setTranslateVal] = useState<string>("");
  const translateY = useSectionTranslate(id);
  const currentSection = sectionDetails.find((item) => item.sectionId === id);

  useEffect(() => {
    const calculateTranslateVal = () => {
      if (
        currentSection !== undefined &&
        window.scrollY >= currentSection.startPosition - currentSection.sectionHeight &&
        window.scrollY <= currentSection.endPosition + currentSection.sectionHeight
      ) {
        const baseScroll = currentSection.sectionHeight;
        const effectiveScroll = (window.scrollY - baseScroll) / 6;

        const effectiveSectionScroll = (window.scrollY-currentSection.startPosition)/6;

        console.log("effectiveScroll ", effectiveSectionScroll);

        setTranslateVal(`translateY(${effectiveScroll}px)`);
        // setTranslateSectionVal(`translateY(${effectiveSectionScroll}px)`);
      }
    };
    calculateTranslateVal();
  }, [currentSection, scroll]);

  return (
    <section
      id={id}
      className="p-section-mobile md:p-section-xl 2xl:p-section-2xl relative overflow-x-clip overflow-y-visible border-none text-green_yellow"
    >
      <div style={{
        transform: `translateY(${translateY ?? 0}px)`,
        // transform: `${translateSectionVal}`,
      }} className="relative bg-transparent z-20">
        <span className="bg-transparent font-tusker uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 2xl:text-tusker-heading md:px-2 ">
          Projects I've worked on
          <ArrowRightIcon className="h-[80px] fill-green_yellow bg-transparent w-auto inline" />
        </span>
        <br />
        <div className="bg-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 md:mt-12">
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
          {/* <Button
            onClick={() => {
              // navigate("/projects")
            }}
            type="button"
            label="View more"
          /> */}
        </div>
      </div>
      <div
        style={{
          transform: `${translateVal} scale(1.5) `,
        }}
        className="absolute bg-transparent hidden sm:inline sm:-top-24 -right-24 xl:-top-60 z-10"
      >
        <Blob variant={1} cls="w-[15rem] h-[15rem]" />
      </div>
      <div
        style={{
          transform: `${translateVal} scale(1.5) `,
        }}
        className="absolute bg-transparent hidden sm:inline sm:top-[25rem] -left-24 lg:top-[8rem] xl:top-[10rem] z-10"
      >
        <Blob variant={2} cls="w-[15rem] h-[15rem]" />
      </div>
    </section>
  );
};

export default ProjectSection;
