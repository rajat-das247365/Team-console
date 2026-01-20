import React, { useState } from "react";
import UserTableData from "./UserTableData";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { MdCancel } from "react-icons/md";
import AddUser from "../components/pages/AddUser";
import AddUserbtn from "./AddUserbtn";

const users = [
  {
    user: "Vivek Jha",
    role: "Admin",
    status: "Active",
    email: "vivek@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar: <VscAccount />,
  },

  {
    user: "Michael Mishra",
    role: "Editor",
    status: "Inactive",
    email: "michael@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar: <VscAccount />,
  },

  {
    user: "Payal Sen",
    role: "Admin",
    status: "Pending",
    email: "payal@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar: <VscAccount />,
  },

  {
    user: "Sam Sharma",
    role: "Viewer",
    status: "Inactive",
    email: "sam@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar: <VscAccount />,
  },

  {
    user: "Casey Roy",
    role: "Admin",
    status: "Inactive",
    email: "casey@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar: <VscAccount />,
  },

  {
    user: "Nandi Maharaj",
    role: "Viewer",
    status: "Active",
    email: "nandi@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar: <VscAccount />,
  },

  {
    user: "Dora Saru",
    role: "Editor",
    status: "Pending",
    email: "dora@teamconsole.com",
    actions: <FaPen />,
    actions2: <MdDelete />,
    avatar: <VscAccount />,
  },
];
const User = () => {
  const [openModel, setOpenModel] = useState(false);
  const [selectUser, setSelectUser] = useState(null);
  const [userList, setUserList] = useState(users);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [filter, setFilter] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

{/*add user */}
const [openAddUser, setOpenAddUser] = useState(false);
const handleAddUser = (newUser)=>{
setUserList ((prev)=>[...prev,newUser]);
setOpenAddUser(false)
}

{/*add user */}

  {/*edit user functionality */}
  const [editForm, setEditForm] = useState({
    user: "",
    role: "",
    status: "",
    email: "",
  });
  const handleEditClick = (user) => {
    setSelectUser(user);
    setEditForm({
      user: user.user,
      role: user.role,
      status: user.status,
      email: user.email,
    });
    setOpenEdit(true);
  };

  const handleEditSave =()=>{
    setUserList((prev)=>
    prev.map((u)=>
    u=== selectUser? {...u, ...editForm}:u
  ))
  setOpenEdit(false);
  setSelectUser(null);
  }
  {/*edit user functionality */}

  const handleDeleteClick = (user) => {
    setSelectUser(user);
    setOpenModel(true);
  };

  const deletedUser = () => {
    setUserList((prev) => prev.filter((user) => user !== selectUser));
    setSelectUser(null);
    setOpenModel(false);
  };

  const filteredUsers = userList.filter((item) => {
    const matchsearch =
      item.user.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      item.email.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    const matchrole = role === "" || item.role === role;

    const matchstatus = filter === "" || item.status === filter;
    return matchsearch && matchrole && matchstatus;
  });
  return (
    <div className="w-full  bg-[#0D1117] items-center flex-col flex justify-center text-slate-200 ">
      <div className="w-full mt-5 mb-20 flex flex-wrap justify-around">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="bg-[#0D1117] border border-slate-700 px-4 py-2 rounded-lg w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="bg-[#0D1117] border border-slate-700 rounded-lg px-4 py-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="" className="">
            All Roles
          </option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        <select
          className="bg-[#0D1117] border border-slate-700 px-4 py-2 rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="table w-2xl   lg:w-6xl bg-[#161B22]  rounded-lg  border border-slate-700 ">
        <table className="w-full  text-left  ">
          <thead className="h-14 border border-b-slate-700 border-t-0 border-l-0 border-r-0">
            <tr className="p-2">
              <th className="px-6">User</th>
              <th className="px-6">Role</th>
              <th className="px-6 hidden md:table-cell">Status</th>
              <th className="px-6 hidden md:table-cell">Actions</th>
            </tr>
          </thead>
          <UserTableData
            users={filteredUsers}
            onDelete={handleDeleteClick}
            onEdit={handleEditClick}
          />
          
        </table>
       
      </div>
 <AddUser open={openAddUser} setOpen={setOpenAddUser} onSave={handleAddUser}/>
 <AddUserbtn setOpen={setOpenAddUser}/>
      {/*modal box */}
      {openModel && (
        <div className="flex-col absolute  p-5 backdrop-blur-md  rounded-xl flex justify-center items-center border border-slate-600">
          <div className="my-5">
            <p className="text-slate-200 text-lg font-semibold">
              Are you sure want to delete this user {selectUser?.user}?
            </p>
          </div>
          <div className="btn flex gap-5">
            <div className="cancel border border-red-500/50 text-red-500 hover:scale-[1.1] transition">
              <button
                onClick={() => setOpenModel(false)}
                className="px-8 py-2  cursor-pointer text-lg font-bold"
              >
                Cancel
              </button>
            </div>
            <div className="cancel border border-green-500/50 text-green-500 hover:scale-[1.1] transition">
              <button
                onClick={deletedUser}
                className="px-8 py-2  cursor-pointer text-lg font-bold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/*modal box */}

      {/*edit box */}
      {openEdit && (
        <div className="editbox  backdrop-blur-xl sm:w-2xs  md:w-2xl rounded-lg border border-slate-700 absolute">
          <div className="boxheadwrap border border-b-slate-700 border-t-0 border-r-0 border-l-0 w-2xl p-5 flex items-center justify-around">
            <div className="boxhead ml-70 ">
              <h1 className="text-2xl font-bold">Edit User</h1>
            </div>
            <button onClick={()=>setOpenEdit(false)} className="cross ml-50 text-3xl">
              <MdCancel />
            </button>
          </div>
          <div className="inputs gap-8 p-5 w-full flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="User name"
              value={editForm.user}
              onChange={(e)=>setEditForm({...editForm,user:e.target.value})}
              className="text-slate-200 w-full border border-slate-700 p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="email"
              value={editForm.email}
              onChange={(e)=>setEditForm({...editForm,email:e.target.value})}
              className="text-slate-200 w-full border border-slate-700 p-2 rounded-lg"
            />
            <select
              name=""
              id=""
              value={editForm.role}
              onChange={(e)=>setEditForm({...editForm,role:e.target.value})}
              className="bg-[#0D1117] w-full border border-slate-700 p-2 rounded-lg"
            >
              <option value="Admin">Admin</option>
              <option value="Viewer">Viewer</option>
              <option value="Editor">Editor</option>
            </select>
            <select
              name=""
              id=""
              value={editForm.status}
              onChange={(e)=>setEditForm({...editForm,status:e.target.value})}
              className="bg-[#0D1117] w-full border border-slate-700 p-2 rounded-lg"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="editBtns p-5 border border-slate-700 border-b-0 border-r-0 border-l-0">
            <div className="btnWrap gap-4 w-full h-full flex justify-end items-center">
              <button onClick={()=>setOpenEdit(false)} className="transition hover:scale-[1.1] w-30 text-xl py-2 px-5 rounded-lg bg-gray-700 ">
                Cancel
              </button>
              <button onClick={handleEditSave} className="transition hover:scale-[1.1] w-30 text-xl py-2 px-5  rounded-lg bg-indigo-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/*edit box */}
    </div>
  );
};

export default User;
