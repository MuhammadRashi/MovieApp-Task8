import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedAuth = () => {
    const {isAuth}=useContext(AuthContext);
    // console.log(isAuth,"=====is sua");
    if(!isAuth){
        return <Navigate to="/Login"/>
    }
  return (
    <Outlet/>
  )
}
