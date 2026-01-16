import React from 'react'
import UserTableData from './UserTableData'
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




const headings = [
  {
    user : "Vivek Jha",
    role : "Admin",
    status : "Active",
      actions : <FaPen />,
    actions2 : <MdDelete/>
    


  }

]
const headings1 = [
  {
    user : "Michael Mishra",
    role : "Editor",
    status : "Inactive",
      actions : <FaPen />,
    actions2 : <MdDelete/>
    


  }

]
const headings2 = [
  {
    user : "Payal Sen",
    role : "Admin",
    status : "Pending",
      actions : <FaPen />,
    actions2 : <MdDelete/>
    


  }

]
const headings3 = [
  {
    user : "Sam Sharma",
    role : "Viewer",
    status : "Inactive",
      actions : <FaPen />,
    actions2 : <MdDelete/>
    


  }

]
const headings4 = [
  {
    user : "Casey Roy",
    role : "Admin",
    status : "Inactive",
      actions : <FaPen />,
    actions2 : <MdDelete/>
    


  }

]
const headings5 = [
  {
    user : "Nandi Maharaj",
    role : "Viewer",
    status : "Active",
      actions : <FaPen  />,
    actions2 : <MdDelete/>
    


  }

]
const headings6 = [
  {
    user : "Dora Saru",
    role : "Editor",
    status : "Pending",
      actions : <FaPen />,
    actions2 : <MdDelete />
    


  }

]
const User = () => {
  return (
    <div className='w-full  bg-[#0D1117] flex justify-center mt-24 text-slate-200 '>
      <div className='table   w-6xl bg-[#161B22]  rounded-lg  border border-slate-700 '>
       <table className='w-full  text-left  '>
        <thead className='h-14 border border-b-slate-700 border-t-0 border-l-0 border-r-0'>
        <tr className='p-2'>
          <th className='px-6'>User</th>
          <th className='px-6'>Role</th>
          <th className='px-6'>Status</th>
          <th className='px-6'>Actions</th>
        </tr>
        </thead>
        <UserTableData headings= {headings}/>
        <UserTableData headings= {headings1}/>
        <UserTableData headings= {headings2}/>
        <UserTableData headings= {headings3}/>
        <UserTableData headings= {headings4}/>
        <UserTableData headings= {headings5}/>
        <UserTableData headings= {headings6}/>
       </table>
      </div>
    </div>
  )
}

export default User
