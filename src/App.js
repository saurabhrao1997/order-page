import React from "react";
import './App.css';
import Navbar from "./component/Navbar.jsx";
import Menubar from "./component/Menubar.jsx";
import Order from "./component/Orders.jsx";
import Dashboard from "./component/Dashboard";
import Channel from "./component/Channel";
import Shipping from "./component/Shipping";
import Inventory from "./component/Inventory";
import Pending from "./orders/Pending";
import Accepted from "./orders/Accepted";
import Awb from "./orders/Awb";
import Cancelled from "./orders/Cancelled";
import Complated from "./orders/Complated";
import Ready from "./orders/Ready";
import Shipped from "./orders/Shipped";
import Import from "./pending/Import";
import Accept from "./pending/Accept";
import Print from "./pending/Print";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Route,Routes} from "react-router-dom"
function App() {
  return (

    <>
      <Navbar/>
    
      
    <Menubar/>
   <Routes>
       
     <Route path="/"  element={<Order/>}   >
       <Route path="accepted" element={<Accepted/>} />
       <Route path="awb" element={<Awb/>} />
       <Route path="cancelled" element={<Cancelled/>} />
       <Route path="complated" element={<Complated/>} />
       <Route path="ready" element={<Ready/>} />
       <Route path="shipped" element={<Shipped/>} />
       <Route path="pending" element={<Pending/>} >
           <Route path="import" element={<Import/>} />
           <Route path="Accept" element={<Accept/>} />
           <Route path="Print" element={<Print/>} />
       </Route>
     </Route>
     <Route path="/dashboard"  element={<Dashboard/>}   />
     <Route path="/channel"  element={<Channel/>}   />
     <Route path="/shipping"  element={<Shipping/>}   />
     <Route path="/inventory"  element={<Inventory/>}   />


   </Routes>





    
  
   
     
    </>

  );
}

export default App;
