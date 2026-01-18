import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Content from './Home'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import User from './User'
import Settings from './Settings'
import AddUser from '../components/pages/AddUser'

const DashBoard = () => {
    const [sideOpen,setSideopen] = useState(false)
  return (
    <div className='flex  min-h-screen bg-[#0D1117]'>
      
      <Sidebar show = {sideOpen} />

      <div className='w-full'>
      <Header toggle = {()=>setSideopen(!sideOpen)} />
    <Routes>
        <Route path = '/' element = {<Home />} />
      <Route path = '/users' element = {<User />} />
      <Route path = '/settings' element = {<Settings />} />
      </Routes>
      </div>
      
    </div>
  )
}

export default DashBoard
