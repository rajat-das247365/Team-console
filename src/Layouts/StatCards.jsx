import React from "react";

const StatCards = ({ statData }) => {
  return (
    <div className="py-3 flex justify-center w-60 h-40 rounded-lg  bg-[#161B22]">
      {statData.map((item, index) => (
        <div key={index} className="card flex flex-col justify-center items-center">
          <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-4 text-3xl text-blue-700">{item.icon}</div>
          <div className="text-lg font-semibold">{item.title}</div>

          </div>
        
          <div className="numbers text-blue-700 mt-8 text-4xl font-bold">{item.number}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
