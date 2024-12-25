import React from "react";
import ProjectList from "../components/ProjectList";

const ProjectPage = () => {
  return (
    <div className="px-[5%] py-[5%] md:py-[3%] space-y-14 w-full">
      <h1>My Projects</h1>
      <ProjectList />
    </div>
  );
};

export default ProjectPage;
