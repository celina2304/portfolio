import ProjectCard from "../ui/ProjectCard";
import project2 from "../../assets/images/projects/project2.png";

const projectsData = [
  {
    id: "project1",
    images: [project2],
    heading: "Book my show clone",
    description:
      "It is a replica of the popular online ticket booking platform, BookMyShow.",
    points: ["", "", ""],
    link: "",
  },
  {
    id: "project2",
    images: [project2],
    heading: "projects data",
    description:
      "It is a replica of the popular abcedfg igjjse online ticket booking platform, BookMyShow. lorem ipson lorem lorem ipson loremlorem ipson loremlorem ipson lorem.",
    points: ["", "", ""],
    link: "",
  },
  {
    id: "project3",
    images: [project2],
    heading: "",
    description: "",
    points: ["", "", ""],
    link: "",
  },
];
const dummy = () => {
  return (
    <section className="bg-white w-full h-[100vh] p-section-xl">
      <div className="flex bg-gray-300 gap-5">
        {projectsData.map((project, projectIndex) => {
          return (
            <ProjectCard
              key={`projectCard-${projectIndex}`}
              projectDetails={project}
            />
          );
        })}
      </div>
    </section>
  );
};

export default dummy;
