import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({toggle}) => {
  return (
    <div className='flex'>
        <div className="hamburger text-3xl flex justify-center text-center px-3 border-b border-slate-700 md:hidden   text-white">
        <button onClick={toggle}><GiHamburgerMenu /></button>
      </div>
    <div className='flex justify-between  md:px-10 items-center text-slate-200 w-full h-20 border-b border-slate-700'>
      <div className="headerLine md:text-3xl font-bold ">
        <h1 className=''>User Management</h1>
      </div>
      <div className=" flex items-center add bg-green-700 rounded-sm md:w-40 sm:w-20 h-10 justify-center hover:bg-green-500 font-bold">
        <IoIosAdd className='text-2xl' />
        <button className='text-white '>
            
           <span className='md:inline hidden'> Add User</span></button>
      </div>
    </div>
    </div>
  )
}

export default Header
