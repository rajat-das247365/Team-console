import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdCancel } from "react-icons/md";

const Header = ({ toggle }) => {
  const [addUser, setAddUser] = useState(false)
  return (
    <div className="relative flex bg-[#161B22]  w-full">
      <div className="hamburger text-3xl flex justify-center text-center px-3 border-b border-slate-700 md:hidden   text-white">
        <button onClick={toggle}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="flex justify-between  md:px-10 items-center text-slate-200 w-full h-20 border-b border-slate-700">
        <div className="headerLine md:text-3xl font-bold ">
          <h1 className="">User Management</h1>
        </div>
        <div onClick={() => setAddUser(true)} className=" flex items-center add bg-green-700 rounded-sm md:w-40 sm:w-20 h-10 justify-center hover:bg-green-500 font-bold">
          <IoIosAdd className="text-2xl" />
          <button className="text-white ">
            <span className="md:inline hidden"> Add User</span>
          </button>
        </div>

      </div>
      {/*add user box */}
      {addUser && (

        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="max-h-[90vh] overflow-y-auto
 text-slate-200 bg-[#0D1117] w-full max-w-xl md:max-w-2xl rounded-lg border border-slate-700">
            <div className="boxheadwrap border-b border-slate-700 p-5 flex items-center justify-between">

              <div className="boxhead">
                <h1 className="text-2xl font-bold ">Edit User</h1>
              </div>
              <button onClick={() => setAddUser(false)} className="cross ml-50 text-3xl">
                <MdCancel />
              </button>
            </div>
            <div className="inputs gap-8 p-5 w-full flex flex-col justify-center items-center">
              <input
                type="text"
                placeholder="User name"

                className="text-slate-200 w-full border border-slate-700 p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="email"

                className="text-slate-200 w-full border border-slate-700 p-2 rounded-lg"
              />
              <select
                name=""
                id=""


                className="bg-[#0D1117] w-full border border-slate-700 p-2 rounded-lg"
              >
                <option value="Admin">Admin</option>
                <option value="Viewer">Viewer</option>
                <option value="Editor">Editor</option>
              </select>
              <select
                name=""
                id=""

                className="bg-[#0D1117] w-full border border-slate-700 p-2 rounded-lg"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="editBtns p-5 border border-slate-700 border-b-0 border-r-0 border-l-0">
              <div className="btnWrap gap-4 w-full h-full flex flex-col justify-end items-center sm:flex-row">
                <button onClick={() => setAddUser(false)} className="transition hover:scale-[1.1] w-30 text-xl py-2 px-5 rounded-lg bg-gray-700 ">
                  Cancel
                </button>
                <button className="transition hover:scale-[1.1] w-30 text-xl py-2 px-5  rounded-lg bg-indigo-700">
                  Save
                </button>
              </div>
            </div>
            </div>
          </div>
      )}
          {/*add user box */}
        </div>
      );
};

      export default Header;
