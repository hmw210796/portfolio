import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import classes from "./Link.module.css";

const LinksTag = () => {
  return (
    <div className={`${classes.list} text-4xl flex md:text-6xl gap-10`}>
      <a
        href="https://www.linkedin.com/in/mingweiho210796/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="mailto: hmw210796@hotmail.com" target="_blank" rel="noreferrer">
        <TbMail />
      </a>
      <a href="https://github.com/hmw210796" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://drive.google.com/file/d/1UD3V8Ecj5bmanTzjfYSpCaLT-NdHtkIS/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <ImProfile />
      </a>
    </div>
  );
};

export default LinksTag;
