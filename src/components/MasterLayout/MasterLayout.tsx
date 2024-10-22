import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { NavBar } from "../index";

const MasterLayout = () => {
  return (
    <div className="flex ">
      <div>
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
