import React from "react";
import ProjectItem, { Project } from "../components/ProjectItem";
import calculator from "../images/calculator.png";
import petStore from "../images/pet-store.png";
import news from "../images/News-App.png";
import weather from "../images/weather.png";
import contact from "../images/contact.png";

export const projectList = [
  {
    id: "p1",
    title: "Pet Hotel App",
    link: "https://pet-hotel-app.vercel.app/",
    image: petStore,
    skills: [
      "NextJS",
      "ReactJS",
      "MongoDB",
      "NewsAPI",
      "TailwindCSS",
      "Typescript",
    ],
    gitLink: "https://github.com/hmw210796/pet-hotel",
  },
  {
    id: "p2",
    title: " News Search App",
    link: "https://mynewspoject.web.app/home",
    image: news,
    skills: ["React", "Firebase", "NewsAPI", "Material UI", "TailwindCSS"],
    gitLink: "https://github.com/hmw210796/find-My-News-App",
  },
  {
    id: "p3",
    title: "Contact Manager App",
    link: "https://contact-manager-app-cad0c.web.app/",
    image: contact,
    skills: ["React", "Firebase", "Semantic UI"],
    gitLink: "https://github.com/hmw210796/contact-manager-app",
  },
  {
    id: "p4",
    title: "Calculator App",
    link: "https://hmw210796-calculator-app.netlify.app/",
    image: calculator,
    skills: ["Javascript", "HTML", "CSS"],
    gitLink: "https://github.com/hmw210796/calculator-app",
  },
  {
    id: "p5",
    title: "Weather App",
    link: "https://hmw210796-weather-app.netlify.app/",
    image: weather,
    skills: ["Javascript", "HTML", "CSS"],
    gitLink: "https://github.com/hmw210796/weather-app",
  },
];

const ProjectList = () => {
  return (
    <ul className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-center">
      {projectList.map((project: Project) => (
        <li key={project.id}>
          <ProjectItem projectList={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
