import Card from "../components/UI/Card";
import {
  FaReact,
  FaWordpress,
  FaMobileAlt,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMaterialui,
  SiFirebase,
  SiMongodb,
  SiJavascript,
  SiCss3,
  SiTypescript,
} from "react-icons/si";
import LinksTag from "../components/Link";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full ">
      <div
        className="poiret font-bold h-screen flex flex-col space-y-10 items-center justify-center bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1510851896000-498520af2236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80)`,
        }}
      >
        <h1 className="text-5xl">Hi, my name is Ming Wei</h1>
        <p className="text-4xl text-yellow-300 uppercase ">
          Front-end Developer
        </p>
        <LinksTag />
      </div>
      <div className="container mx-auto px-[10%] py-20 space-y-10 lg:pl-[15%] 2xl:pl-[10%]">
        <h1>My Skills</h1>
        <div className="space-y-4">
          <h2 className="text-4xl text-left  pb-4">Front-end</h2>
          <div className="grid gap-6 grid-auto text-xl ">
            <Card icon={<FaReact />}>React JS</Card>
            <Card icon={<TbBrandNextjs />}>Next JS</Card>
            <Card icon={<SiTailwindcss />}>Tailwind CSS</Card>
            <Card icon={<SiMaterialui />}>Material UI</Card>
            <Card icon={<FaWordpress />}>Wordpress</Card>
            <Card icon={<FaMobileAlt />}>Responsive Design</Card>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl text-left  pb-4">Back-end</h2>
          <div className="grid gap-6 grid-auto text-xl ">
            <Card icon={<SiFirebase />}>Firebase</Card>
            <Card icon={<SiMongodb />}>MongoDB</Card>
            <Card icon={<FaNodeJs />}>Node JS</Card>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl text-left  pb-4">Languages</h2>
          <div className="grid gap-6 grid-auto text-xl ">
            <Card icon={<SiJavascript />}>Javascript</Card>
            <Card icon={<FaHtml5 />}>HTML</Card>
            <Card icon={<SiCss3 />}>CSS</Card>
            <Card icon={<SiTypescript />}>Typescript</Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
