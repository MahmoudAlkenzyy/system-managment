import { CiBookmark, CiLogout } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/Authcontext";
import { FaAlignJustify } from "react-icons/fa";
const MySidebar = () => {
  const authContext = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(false);
  if (!authContext) {
    throw new Error("useContext must be used within an AuthProvider");
  }
  const { user } = authContext;
  const Logout = () => {
    localStorage.removeItem("userTkn");
  };
  return (
    <div className="relative h-full">
      <FaAlignJustify onClick={() => setCollapsed((val) => !val)} size={24} className="absolute end-0 translate-x-full  " />
      <Sidebar className="h-full relative " collapsed={collapsed}>
        <Menu
          className="px-4"
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <div className="my-8 gap-3 flex-col flex items-center justify-center ">
            <img className="rounded-full" src={user?.image} alt="" />
            <p className="font-semibold">{`${user?.firstName} ${user?.lastName}`}</p>
            <p className="font-semibold text-[#FEAF01]">admin</p>
          </div>
          <MenuItem icon={<IoHomeOutline />} component={<Link to="/dashboard/Home" />}>
            Home
          </MenuItem>
          <MenuItem icon={<CiBookmark />} component={<Link to="/dashboard/userList" />}>
            Users
          </MenuItem>
          <MenuItem icon={<LuGraduationCap />} component={<Link to="/dashboard/AddUser" />}>
            Add User
          </MenuItem>
          <MenuItem icon={<LiaCommentDollarSolid />} component={<Link to="/dashboard/profile" />}>
            Profile
          </MenuItem>
          <MenuItem icon={<CiLogout />} onClick={Logout} component={<Link to="/" />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MySidebar;
