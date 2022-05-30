import React from 'react';
import "../css/oder.css";
import {NavLink,Outlet} from "react-router-dom";
export default function Orders() {

  const  ChangeBg = ({isActive})=>{
    return{
      color: isActive ? "blue" : "black",
       borderBottom: isActive ? "2px solid blue":"none",
      // textDecorationLine:isActive ? "underline" : "none",
    }
   }


  return (
    <>
    <div className="oder-list">

<li><NavLink  to="/pending" style={ChangeBg} className="item">pending</NavLink></li>
   <li><NavLink to="/Accepted" style={ChangeBg} className="item">Accepted</NavLink></li>
   <li><NavLink to="/AWB" style={ChangeBg} className="item">AWB Created</NavLink></li>
   <li><NavLink to="/Ready" style={ChangeBg} className="item">Ready To Ship</NavLink></li>
   <li><NavLink to="/shipped" style={ChangeBg} className="item">shipped</NavLink></li>
   <li><NavLink to="/complated" style={ChangeBg} className="item">complated</NavLink></li>
   <li><NavLink to="/cancelled" style={ChangeBg} className="item">cancelled</NavLink></li> 

 </div>

   
   <Outlet/>
   </>
  )
}
