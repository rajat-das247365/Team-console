import React from "react";

const UserTableData = ({ users , onDelete, onEdit }) => {
  return (
    
    <tbody >
      {users.map((item, id) => (
        <tr
          key={id}
          className=" h-14 border border-b-slate-700 border-t-0 border-l-0 border-r-0 "
        >
          <div>
            <td className="px-6 text-sm">{item.user}</td>
            <p className="px-6 text-sm text-slate-600">{item.email}</p>
          </div>

<td className="px-6 py-3 text-sm hidden md:table-cell">
  {item.role}
</td>
<td className="px-6 py-3 text-sm hidden md:table-cell">
  {item.status}
</td>
          <div className="flex gap-2 md:flex-row flex-col w-28  justify-around h-14 items-center">
            <div className="">
              <button onClick={()=> onEdit(item)} className="border border-slate-700 p-3 hover:bg-[#0D1117]  text-xl text-indigo-600">{item.actions}</button>
            </div>
            <div  className=" ">
              <button onClick={()=> onDelete(item)} className=" text-xl text-red-600 border border-slate-700 p-3 hover:bg-[#0D1117]">{item.actions2}</button>
            </div>
          </div>
        </tr>
      ))}
    </tbody>
    
  );
};

export default UserTableData;
