import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const [navbar, setNavbar] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setNavbar("md:sticky ");
    } else {
      setNavbar("md:fixed ");
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`${navbar} ${classes.header}  transition-all ease-in duration-500 w-full top-0 z-10 `}
      >
        <div className="hidden md:flex mx-auto p-6 justify-center md:justify-start  gap-12  text-2xl  text-white">
          <h2 className="hidden md:block">Ming Wei</h2>
          <nav className="md:border-l md:border-white md:pl-10">
            <ul className={classes.list}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
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
                >
                  Experience
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
