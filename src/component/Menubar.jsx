import React, { useState } from 'react';
import "../css/menubar.css";
import{NavLink  } from "react-router-dom";

 function Menubar() {


 const  ChangeBg = ({isActive})=>{
  return{
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? "blue" : "white",
    borderRight :isActive ?"5px solid red":"none"
  
  }
 }
  return (
<>


<i className="fa-solid fa-list"></i>

    <input type="checkbox" id="openSidebarMenu"></input>
    <label htmlFor="openSidebarMenu" className='sidebarIconToggle'></label>



    
    <div id='sideBarManu'>
     



        <ul className='menu'>
            <li><NavLink to="/dashboard" style={ChangeBg}>DashBoard</NavLink></li>
            <li><NavLink to="/inventory" style={ChangeBg}>Inventory</NavLink></li>
            <li><NavLink to="/" style={ChangeBg}>Orders</NavLink></li>
            <li><NavLink to="/shipping" style={ChangeBg}>Shipping</NavLink></li>
            <li><NavLink to="/channel" style={ChangeBg}>Channel</NavLink></li>
        </ul>
       
    </div>
 
    </>
  )
}
export default Menubar;