import { Navigate,Outlet } from "react-router-dom";
import React from 'react'
import { Useauth } from "../Components/context/Authprovider";
const Privatelayout = () => {
  const auth=Useauth();
  if(!auth){
    return <Navigate to="/login"/> 

  }
  return (
    <>

    <Outlet/> 
    </>
  )
}

export default Privatelayout
