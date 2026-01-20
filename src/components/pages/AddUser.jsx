import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const AddUser = ({ open, setOpen, onSave }) => {
  const [form, setForm] = useState({
    user: "",
    email: "",
    role: "Admin",
    status: "Active",
  });

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div
        className="max-h-[90vh] overflow-y-auto
            text-slate-200 bg-[#0D1117] w-full max-w-xl md:max-w-2xl rounded-lg border border-slate-700"
      >
        <div className="boxheadwrap border-b border-slate-700 p-5 flex items-center justify-between">
          <div className="boxhead">
            <h1 className="text-2xl font-bold ">Add User</h1>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="cross ml-50 text-3xl"
          >
            <MdCancel />
          </button>
        </div>
        <div className="inputs gap-8 p-5 w-full flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="User name"
            value={form.user}
            onChange={(e) => setForm({ ...form, user: e.target.value })}
            className="text-slate-200 w-full border border-slate-700 p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="text-slate-200 w-full border border-slate-700 p-2 rounded-lg"
          />
          <select
            name=""
            id=""
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="bg-[#0D1117] w-full border border-slate-700 p-2 rounded-lg"
          >
            <option value="Admin">Admin</option>
            <option value="Viewer">Viewer</option>
            <option value="Editor">Editor</option>
          </select>
          <select
            name=""
            id=""
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="bg-[#0D1117] w-full border border-slate-700 p-2 rounded-lg"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="editBtns p-5 border border-slate-700 border-b-0 border-r-0 border-l-0">
          <div className="btnWrap gap-4 w-full h-full flex flex-col justify-end items-center sm:flex-row">
            <button
              onClick={() => setOpen(false)}
              className="transition hover:scale-[1.1] w-30 text-xl py-2 px-5 rounded-lg bg-gray-700 "
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (!form.user || !form.email) return;
                onSave({
                  ...form,
                  actions: <FaPen />,
                  actions2: <MdDelete />,
                });
                setForm({
                  user: "",
                  email: "",
                  role: "Admin",
                  status: "Active",
                });
              }}
              className="transition hover:scale-[1.1] w-30 text-xl py-2 px-5  rounded-lg bg-indigo-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
