// import React from 'react'
// import { createContext,useState,useEffect,useContext} from "react";
// import { useLocation,useNavigate } from "react-router-dom";

// export const Authcontext= createContext(null)


// export const Authprovider = ({children}) => {
//   const [auth,setauth]=useState(null);
//   const location=useLocation();
//   const navigate=useNavigate();
//   useEffect(()=>{

//     const stringifyBlogdata=window.localStorage.getItem("blogdata")
//     if(stringifyBlogdata){
//       const blogdata=JSON.parse(stringifyBlogdata)
//       const user=blogdata.user;
//       setauth(user);
//     }
//     else{
//       setauth(null);
//     }

//   },[navigate,location])
//   return <Authcontext.Provider value={auth}>{children}</Authcontext.Provider>
// }
// export const Useauth=()=>{
// const auth=  useContext(Authcontext);
// return auth;

// }
// export default Authprovider
