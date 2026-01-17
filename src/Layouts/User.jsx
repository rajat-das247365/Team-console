import React from "react";
import UserTableData from "./UserTableData";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";


const headings = [
  {
    user: "Vivek Jha",
    role: "Admin",
    status: "Active",
    email : "vivek@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
     avatar : <VscAccount /> ,
  },

  {
    user: "Michael Mishra",
    role: "Editor",
    status: "Inactive",
    email : "michael@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar : <VscAccount /> ,
  },

  {
    user: "Payal Sen",
    role: "Admin",
    status: "Pending",
    email : "payal@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar : <VscAccount /> ,
  },

  {
    user: "Sam Sharma",
    role: "Viewer",
    status: "Inactive",
    email : "sam@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar : <VscAccount /> ,
  },

  {
    user: "Casey Roy",
    role: "Admin",
    status: "Inactive",
    email : "casey@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar : <VscAccount /> ,
  },

  {
    user: "Nandi Maharaj",
    role: "Viewer",
    status: "Active",
    email : "nandi@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar : <VscAccount /> ,
  },

  {
    user: "Dora Saru",
    role: "Editor",
    status: "Pending",
    email : "dora@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar : <VscAccount /> ,
  },
];
const User = () => {
  return (
    <div className="w-full  bg-[#0D1117] flex justify-center mt-24 text-slate-200 ">
      <div className="table   w-6xl bg-[#161B22]  rounded-lg  border border-slate-700 ">
        <table className="w-full  text-left  ">
          <thead className="h-14 border border-b-slate-700 border-t-0 border-l-0 border-r-0">
            <tr className="p-2">
              <th className="px-6">User</th>
              <th className="px-6">Role</th>
              <th className="px-6">Status</th>
              <th className="px-6">Actions</th>
            </tr>
          </thead>
          <UserTableData headings={headings} />
        </table>
      </div>
    </div>
  );
};

export default User;
