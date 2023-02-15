import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./MobileMenu.module.css";
import { RxCross1 } from "react-icons/rx";

const MobileMenu = () => {
  const [navCSS, setNavCSS] = useState("");
  const [iconCSS, setIconCSS] = useState("");

  const openMenuHandler = () => {
    setNavCSS("translate-x-full");
    setIconCSS("invisible");
  };

  const closeMenuHandler = () => {
    setNavCSS("");
    setIconCSS("");
  };

  return (
    <>
      <AiOutlineMenu
        onClick={openMenuHandler}
        className={`text-[3rem] ${iconCSS}`}
      />
      <div
        className={`${classes.header} ${navCSS} transform -left-[45%] w-[45%] p-[5%] flex flex-col  h-screen text-2xl fixed top-0  bg-gradient-to-r 2 to-orange-100 from-purple`}
      >
        <RxCross1 className="text-[3rem]" onClick={closeMenuHandler} />
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              onClick={closeMenuHandler}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={closeMenuHandler}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={closeMenuHandler}
            >
              Experience
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
