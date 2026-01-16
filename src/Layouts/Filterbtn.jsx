import React from 'react'
import { FaFilter } from "react-icons/fa";


const Filterbtn = () => {
  return (
       <div
      
       className="filter flex justify-center">
        <button  className="p-2 border border-slate-700 rounded-lg w-40 h-full flex justify-center gap-4 items-center bg-[#161B22]">
                  <div className="text-center"><FaFilter />
</div>
            <h1 className="">FILTER</h1>

        </button>
        </div>
  )
}

export default Filterbtn
