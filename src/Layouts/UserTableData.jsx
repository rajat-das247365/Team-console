import React from 'react'

const UserTableData = ({headings}) => {
  return (
    <tbody>
        {headings.map((item,id)=>
      <tr key={id} className=' h-14 border border-b-slate-700 border-t-0 border-l-0 border-r-0 hover:bg-slate-700/50'>
        <td className='px-6 text-sm'>{item.user}</td>
        <td className='px-6 text-sm'>{item.role}</td>
        <td className='px-6 text-sm'>{item.status}</td>
        <td className='px-6 text-xl text-indigo-600'>{item.actions}</td>
        <td className='px-6 text-xl text-red-600'>{item.actions2}</td>
      </tr>
      )}
    </tbody> 
  )
}

export default UserTableData
