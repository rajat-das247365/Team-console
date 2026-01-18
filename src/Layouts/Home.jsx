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
import { FaUsersSlash } from "react-icons/fa";
import AddUser from '../components/pages/AddUser';





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
const statData5 = [
  {
    title:"Inactive users",
    number:"70",
    icon: <FaUsersSlash />


}
  
]
const Home = () => {
  return (
    <div className='bg-[#0D1117]'>
  
    <div className="stats   w-full flex justify-around items-center flex-wrap text-slate-300 gap-6 mt-20">
      <div className='w-5xl gap-10 flex-wrap flex h-80 justify-center items-center'>
        <StatCards statData={statData}/>
      <StatCards statData={statData2}/>
      <StatCards statData={statData3}/>
      <StatCards statData={statData5}/>
      <StatCards statData={statData4}/>
      </div>
    
      
    </div>
</div>




  )
}

export default Home
