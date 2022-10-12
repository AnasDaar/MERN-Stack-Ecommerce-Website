import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const PrivateComp = () => {
    
    const auth = localStorage.getItem('login')


  return auth ? <Outlet /> : <Navigate to= '/' />
    
  
}

export default PrivateComp