import React from 'react'
import { ImSearch } from "react-icons/im";
import { FaChevronDown } from "react-icons/fa";
import Dropbtn from './Dropbtn';
import Filterbtn from './Filterbtn';
import { HiMiniUserGroup } from "react-icons/hi2";
import StatCards from './StatCards';
import { IoShieldCheckmark } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdTime } from "react-icons/io";





const ListData = [
  {
    label: "Admin"
  },
  {
    label: "Viewer"
  },
  {
    label: "Editor"
  },
]
const ListData2 = [
  {
    label: "Active"
  },
  {
    label: "Inactive"
  },
  {
    label: "Waiting"
  },
]

const statData = [
  {
    title:"Total users",
    number:"1,250",
    icon: <HiMiniUserGroup />
}
  
]
const statData2 = [
  {
    title:"Active users",
    number:"1,180",
    icon: <IoShieldCheckmark />

}
  
]
const statData3 = [
  {
    title:"Admins",
    number:"8",
    icon: <MdAdminPanelSettings />

}
  
]
const statData4 = [
  {
    title:"Pending users",
    number:"5",
    icon: <IoMdTime />

}
  
]
const Home = () => {
  return (
    <div>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-slate-300 gap-6 mt-6 px-4'>
      <div className="search flex items-center gap-2 border border-slate-700 p-2 rounded-lg ">
        <ImSearch />
        <input className='border-none focus:outline-none w-full' type="text" placeholder='Search by name or email...' />
      </div>
      
      <Dropbtn listData={ListData} btnName={"ROLES"} btnIcon={<FaChevronDown />} />
      <Dropbtn listData={ListData2} btnName={"STATUS"} btnIcon={<FaChevronDown />} />
      <Filterbtn />
    </div>
    <div className="stats w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-slate-300 gap-6 mt-6 px-4">
      <StatCards statData={statData}/>
      <StatCards statData={statData2}/>
      <StatCards statData={statData3}/>
      <StatCards statData={statData4}/>
    </div>
</div>




  )
}

export default Home
