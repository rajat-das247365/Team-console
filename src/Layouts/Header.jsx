import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";



const Header = ({ toggle }) => {


  return (
    <div className=" top-0  flex bg-[#161B22]  w-full">
      <div className="hamburger text-3xl flex justify-center text-center px-3 border-b border-slate-700 md:hidden   text-white">
        <button onClick={toggle}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="flex justify-between  md:px-10 items-center text-slate-200 w-full h-20 border-b border-slate-700">
        <div className="headerLine md:text-3xl font-bold ">
          <h1 className="">User Management</h1>
        </div>
     

      </div>
     
        </div>
      );
};

      export default Header;
