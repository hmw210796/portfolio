import React from "react";
import { Link } from "react-router-dom";

export type Project = {
  title: string;
  link: string;
  id: string;
  image: string;
  skills: string[];
  gitLink: string;
};

const ProjectItem: React.FC<{ projectList: Project }> = (props) => {
  const { id, title, image } = props.projectList;

  return (
    <Link to={id}>
      <div className="bg-white hover:scale-110 duration-500 flex text-black flex-col  justify-around items-center text-center shadow-md rounded-lg mx-auto max-w-md md:max-w-sm">
        <img
          className="rounded-md object-cover object-top h-[15rem] w-full "
          src={image}
          alt=""
        />
        <div className="py-8">
          <p className="font-bold text-2xl  ">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
