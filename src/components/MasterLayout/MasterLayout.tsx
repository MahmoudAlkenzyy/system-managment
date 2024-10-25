import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { NavBar } from "../index";

const MasterLayout = () => {
  return (
    <div className="flex ">
      <div className="min-h-screen">
        <Sidebar />
      </div>
      <div className=" bg-gray-50 flex-grow">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
