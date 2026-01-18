import React from 'react'

const AddUser = () => {
  return (
    
            
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
            
    
  )
}

export default AddUser
