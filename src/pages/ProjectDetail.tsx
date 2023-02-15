import React from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projectList } from "../components/ProjectList";

const ProjectDetail = () => {
  const params = useParams();
  const projectId = params.projectId;

  const { title, image, link, skills, gitLink } = projectList.filter(
    (project) => project.id === projectId
  )[0];

  return (
    <div className="flex flex-col items-center py-[5%] px-[10%] space-y-10 w-full ">
      <h1>{title}</h1>
      <img src={image} alt="" className="h-[10rem] sm:h-[20rem] lg:h-[30rem]" />
      <h2 className="text-xl md:text-3xl">
        <span className="font-bold">Stack: </span>
        {skills?.join(", ")}
      </h2>
      <div className="flex text-4xl gap-10 items-center">
        <button>
          <a href={link} target="_blank" rel="noreferrer">
            Visit App
          </a>
        </button>
        <a href={gitLink} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
