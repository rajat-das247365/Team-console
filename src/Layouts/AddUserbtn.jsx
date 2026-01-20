import React from 'react'
import { IoIosAdd } from "react-icons/io";
const AddUserbtn = ({setOpen}) => {
  return (
    
       <div onClick={()=>setOpen(true)}  className=" top-5 right-10 absolute flex items-center add bg-green-700 rounded-sm md:w-40 sm:w-20 h-10 justify-center hover:bg-green-500 font-bold">
                <IoIosAdd className="text-2xl" />
                <button className="text-white ">
                  <span className="md:inline hidden"> Add User</span>
                </button>
              </div>
    
  )
}

export default AddUserbtn
