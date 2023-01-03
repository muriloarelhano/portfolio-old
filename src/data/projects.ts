import godevrel from "../../public/godevrel-print.png";
import port from "../../public/portfolio.png";
import { ProjectCardProps } from "../components/IndexPage/ProjectCard";

export const listOfProjects: ProjectCardProps[] = [
  {
    title: "Portfolio",
    description:
      "It´s my personal website to describe my skills, show a resume and other things about me",
    pageLink: "#",
    imageSrc: port.src,
    alt: "my portfolio website print",
  },
  {
    title: "GoDevrel",
    description:
      "Website created as my final paper of graduation in Information Systems",
    pageLink: "https://godevrel.netlify.com",
    imageSrc: godevrel.src,
    alt: "my portfolio website print",
  },
];
