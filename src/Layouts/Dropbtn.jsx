import React, { useEffect, useRef, useState } from "react";

const Dropbtn = ({ btnName, btnIcon, listData =[] }) => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef (null);
  useEffect(() => {
    const clickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [dropOpen]);
  return (
    <div
      ref={dropRef}
       className="Dropdown relative flex justify-center"
    >
        <button onClick={()=>setDropOpen(!dropOpen)} className="px-10 border border-slate-700 rounded-lg w-60 h-full flex justify-between items-center">
            <h1 className="">{btnName}</h1>
      <div className="text-center">{btnIcon}</div>
        </button>
      
{dropOpen && (
      <div className="list  absolute w-60  px-2 py-2 rounded-lg top-12   border border-slate-700">
        
          <ul>
            {listData.map((item,index) => (
            <li  key={index} className=" px-2 py-3 rounded-lg  text-slate-300 hover:bg-[#161B22]">{item.label}</li>
            ))}
          </ul>
       
      </div>
       )}
      
    </div>
  );
};

export default Dropbtn;
