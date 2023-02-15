import { Outlet } from "react-router-dom";
import MobileNavBar from "../components/UI/MobileNavBar";
import NavBar from "../components/UI/NavBar-col";

const Root = () => {
  return (
    <>
      <div className="lg:hidden">
        <MobileNavBar />
        <Outlet />
      </div>
      <div className="hidden lg:flex">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
