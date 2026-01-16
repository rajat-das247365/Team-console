import React, { useEffect, useState } from 'react'
import DashBoard from './Layouts/DashBoard'
import Loader from './components/Loader'

const App = () => {
  const[loading,setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
         setLoading(false)
    },1500);
    return ()=>clearTimeout(timer);
  },[]);

  if (loading) {
    return <Loader />
  }
  return <DashBoard />;
}

export default App
