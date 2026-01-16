import React from "react";
import { DiBackbone } from "react-icons/di";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";


const Sidebar = ({show}) => {
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 mx-2 rounded-lg font-semibold transition
   ${isActive
      ? "bg-blue-600/10 text-[#3687FE]"
      : "text-slate-400 hover:text-[#3687FE] hover:bg-[#1f242c]"}`

  return (
  <div className={`md:block ${show? "block":"hidden"}`}>
  <div className=" text-slate-300 md:w-2xs h-screen  border-r border-slate-700">

    {/*logo */}
    <div className=" logo md:text-xl h-20 border-b border-slate-700  flex justify-center items-center gap-2">
      
      <div className="icon text-4xl text-[#3687FE]">
        <DiBackbone />
      </div>

      <div className="appName font-bold">
        <h1>TeamConsole</h1>
      </div>
    </div>
    {/*logo */}

    {/*navlinks */}

    <div className=" flex flex-col mt-4">
      <NavLink to="/" className={navClass}>
        <IoHome className="text-lg" />
        Dashboard
      </NavLink>

      <NavLink to="/users" className={navClass}>
        <FaUserAlt className="text-lg" />
        Users
      </NavLink>

      <NavLink to="/settings" className={navClass}>
        <IoSettingsSharp className="text-lg" />
        Settings
      </NavLink>

      <NavLink to="/logout" className={navClass}>
        <MdLogout className="text-lg" />
        Logout
      </NavLink>
    </div>
    {/*navlinks */}

  </div>
  </div>
  )
};

export default Sidebar;
