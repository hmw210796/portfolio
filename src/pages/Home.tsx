import Card from "../components/UI/Card";
import {
  FaReact,
  FaWordpress,
  FaMobileAlt,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMaterialui,
  SiFirebase,
  SiMongodb,
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiPhp,
  SiGraphql,
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
            <Card icon={<FaReact />} rating={4}>
              React JS
            </Card>
            <Card icon={<TbBrandNextjs />} rating={3}>
              Next JS
            </Card>
            <Card icon={<SiRedux />} rating={3}>
              Next JS
            </Card>
            <Card icon={<TbBrandReactNative />} rating={3}>
              React Native
            </Card>
            <Card icon={<SiTailwindcss />} rating={3}>
              Tailwind CSS
            </Card>
            <Card icon={<SiMaterialui />} rating={3}>
              Material UI
            </Card>
            <Card icon={<FaWordpress />} rating={2}>
              Wordpress
            </Card>
            <Card icon={<FaMobileAlt />} rating={3}>
              Responsive Design
            </Card>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl text-left  pb-4">Back-end</h2>
          <div className="grid gap-6 grid-auto text-xl ">
            <Card icon={<SiFirebase />} rating={3}>
              Firebase
            </Card>
            <Card icon={<SiMongodb />} rating={3}>
              MongoDB
            </Card>
            <Card icon={<FaNodeJs />} rating={2}>
              Node JS
            </Card>
            <Card icon={<SiExpress />} rating={2}>
              Express JS
            </Card>
            <Card icon={<SiGraphql />} rating={2}>
              GraphQL
            </Card>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl text-left  pb-4">Languages</h2>
          <div className="grid gap-6 grid-auto text-xl ">
            <Card icon={<SiJavascript />} rating={4}>
              Javascript
            </Card>
            <Card icon={<FaHtml5 />} rating={4}>
              HTML
            </Card>
            <Card icon={<SiCss3 />} rating={4}>
              CSS
            </Card>
            <Card icon={<SiTypescript />} rating={2}>
              Typescript
            </Card>
            <Card icon={<SiPhp />} rating={2}>
              PHP
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
