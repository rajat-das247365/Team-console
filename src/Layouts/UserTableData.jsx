import React from 'react'

const UserTableData = ({headings}) => {
  return (
    <tbody>
        {headings.map((item,id)=>
      <tr key={id} className=' h-14 border border-b-slate-700 border-t-0 border-l-0 border-r-0 '>
        
          
        
        <div>
         
<td className='px-6 text-sm'>{item.user}</td>
<p className='px-6 text-sm text-slate-600'>{item.email}</p>
        </div>
        
        <td className='px-6 text-sm'>{item.role}</td>
        <td className='px-6 text-sm'>{item.status}</td>
        <div className=' w-28 flex justify-around h-14 items-center'>
                 <div className='border border-slate-700 p-3 hover:bg-[#0D1117] '>
                                    <td className=' text-xl text-indigo-600'>{item.actions}</td>

                 </div>
<div className='border border-slate-700 p-3 hover:bg-[#0D1117] '>
          <td className=' text-xl text-red-600'>{item.actions2}</td>

</div>

        </div>
      </tr>
      )}
    </tbody> 
  )
}

export default UserTableData
