import React from 'react';
import "../css/pending.css"
import {NavLink,Outlet} from "react-router-dom";
export default function Pending() {


  const  ChangeBg = ({isActive})=>{
    return{
      color: isActive ? "black" : "gray",
      // backgroundColor: isActive ? "blue" : "white",
       border :isActive ?"1px solid black":"1px solid gray",
      boxShadow: isActive ? "1px 1px 2px 1px rgba(0,0,0,0.5)":"none"
    
    }
   }




  return (
    <>
    
    <div className='data'>
      <li><NavLink to="/pending/import" style={ChangeBg} className="NavlinkList">Import Order</NavLink></li>
      <li><NavLink to="/pending/accept" style={ChangeBg} className="NavlinkList">Accept</NavLink></li>
      <li><NavLink to="/pending/print" style={ChangeBg} className="NavlinkList">Print</NavLink></li>
    </div>
    
    <Outlet/>
    </>
 
  )
}
