import React from "react";
import ProjectItem, { Project } from "../components/ProjectItem";
import calculator from "../images/calculator.png";
import fuzzypetstore from "../images/fuzzypetstore.png";
import airselangor from "../images/airselangor.png";
import razer from "../images/razer.png";
import RWC from "../images/RWC.png";
import tgv from "../images/tgv.png";
import petStore from "../images/pet-store.png";
import news from "../images/News-App.png";
import weather from "../images/weather.png";
import contact from "../images/contact.png";
import map from "../images/map-locator.png";

export const projectList = [
  {
    id: crypto.randomUUID(),
    title: "Air Selangor",
    link: "https://www.airselangor.com",
    image: airselangor,
    skills: [
      "NextJS",
      "React",
      "SCSS",
      "Umbraco",
      "API integration",
      "Zustand",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "TGV",
    link: "https://www.tgv.com.my/home",
    image: tgv,
    skills: ["AngularJS", "SCSS", "API integration"],
  },
  {
    id: crypto.randomUUID(),
    title: "Resorts World Cruise - Quickpay APP",
    image: RWC,
    skills: ["AngularJS", "Ionic", "SCSS", "API integration"],
  },
  {
    id: crypto.randomUUID(),
    title: "Razer Gold Partners",
    link: "https://partners.gold.razer.com",
    image: razer,
    skills: ["Eleventy", "SCSS", "Nunjucks"],
  },
  {
    id: crypto.randomUUID(),
    title: "Fuzzy Pet Store",
    link: "https://fuzzypetstore.000webhostapp.com/",
    image: fuzzypetstore,
    skills: ["Wordpress", "HTML", "CSS", "Elementor"],
    gitLink: "https://github.com/hmw210796/pet-hotel",
  },
  {
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
    title: " News Search App",
    link: "https://mynewspoject.web.app/home",
    image: news,
    skills: ["React", "Firebase", "NewsAPI", "Material UI", "TailwindCSS"],
    gitLink: "https://github.com/hmw210796/find-My-News-App",
  },
  {
    id: crypto.randomUUID(),
    title: "Map Locator App",
    link: "https://map-locator.netlify.app/",
    image: map,
    skills: ["React", "Redux", "Material UI", "Places Autocomplete API"],
    gitLink: "https://github.com/hmw210796/map-locator",
  },
  {
    id: crypto.randomUUID(),
    title: "Contact Manager App",
    link: "https://contact-manager-app-cad0c.web.app/",
    image: contact,
    skills: ["React", "Firebase", "Semantic UI", "TailwindCSS"],
    gitLink: "https://github.com/hmw210796/contact-manager-app",
  },
  {
    id: crypto.randomUUID(),
    title: "Calculator App",
    link: "https://hmw210796-calculator-app.netlify.app/",
    image: calculator,
    skills: ["Javascript", "HTML", "CSS"],
    gitLink: "https://github.com/hmw210796/calculator-app",
  },
  {
    id: crypto.randomUUID(),
    title: "Weather App",
    link: "https://hmw210796-weather-app.netlify.app/",
    image: weather,
    skills: ["Javascript", "HTML", "CSS"],
    gitLink: "https://github.com/hmw210796/weather-app",
  },
];

const ProjectList = () => {
  return (
    <ul className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-center mx-auto">
      {projectList.map((project: Project) => (
        <li key={project.title}>
          <ProjectItem projectList={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
