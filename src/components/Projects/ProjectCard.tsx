import React from "react";
import { projectCardProps } from "../../types/components";

const ProjectCard: React.FC<projectCardProps> = (props: projectCardProps) => {
  const { height, width, bg } = props;
  const elementHeight = `h-[${height}px]`;
  const elementWidth = `w-[${width}px]`;
  console.log(elementHeight, elementWidth);
  return <div className={`h-full w-full ${bg}`}></div>;
};

export default ProjectCard;
