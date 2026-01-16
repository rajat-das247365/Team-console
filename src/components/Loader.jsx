import React from 'react'

const Loader = () => {
  return (
    <div className=' w-full h-screen bg-[#0D1117] flex justify-center items-center'>
      <div className='border border-blue-800 p-12'>
        <p className='text-4xl text-slate-500'>TeamConsole is Loading....</p>
      </div>
    </div>
  )
}

export default Loader
