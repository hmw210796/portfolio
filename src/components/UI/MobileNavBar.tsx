import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const MobileNavBar = () => {
  const [navbar, setNavbar] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setNavbar("sticky bg-dark-blue");
    } else {
      setNavbar("fixed ");
    }
  }, [location.pathname]);

  return (
    <div className={`${navbar} p-[5%] w-full flex lg:hidden top-0 `}>
      <MobileMenu />
    </div>
  );
};

export default MobileNavBar;
