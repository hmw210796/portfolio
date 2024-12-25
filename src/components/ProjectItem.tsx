import React from "react";
import { Link } from "react-router-dom";

export type Project = {
  title: string;
  link?: string;
  id: string;
  image: string;
  skills: string[];
  gitLink?: string;
};

const ProjectItem: React.FC<{ projectList: Project }> = (props) => {
  const { id, title, image } = props.projectList;

  return (
    <Link to={id}>
      <div className="relative bg-white hover:scale-110 overflow-hidden duration-500 flex text-black flex-col  justify-around items-center text-center shadow-md rounded-lg mx-auto max-w-md md:max-w-sm">
        <img
          className="object-cover object-top h-[15rem] w-full"
          src={image}
          alt=""
        />
        <div className="bg-opacity-0 transition-all text-transparent hover:bg-opacity-50 hover:text-white font-semibold absolute left-0 right-0 top-0 bottom-0 bg-black flex justify-center items-center text-lg">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
