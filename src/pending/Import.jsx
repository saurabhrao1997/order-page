import React, { useEffect, useState } from 'react';
import "../css/import.css";
import Records from "../JSON/tableData.json";
import BootstrapTable from 'react-bootstrap-table-next/lib/src/bootstrap-table';
import "bootstrap/dist/css/bootstrap.min.css";
import {useTable} from "react-table";
import lodash from "lodash";

let Time = new Date();
let today = Time.getDate();
let month = Time.getMonth();
let year = Time.getFullYear();


const pageSize = 5;

export default function Import() {

const [peges ,setPages]= useState(1);
const [peginetor, setPeginetor] =useState([]);
const [orderNoValue,setOderNoValue] =useState(null);
const [match, setMatch]=useState('');
const pageCount = Records ?Math.ceil(Records.length/pageSize):0;
useEffect(()=>{
  setPeginetor(lodash(Records).slice(0).take(pageSize).value())
},[Records])


const refreshData =()=>{
  setPages(1)
}



const priviousPage =async(pageNo)=>{

  if(peges >0){

    console.log("privios")
    setPages(peges - 1);
    let  startIndex =(pageNo-1)*pageSize;
    let peginetedPost = lodash(Records).slice(startIndex).take(pageSize).value()
    setPeginetor(peginetedPost);
  }
 


}

const nextPage= async(pageNo)=>{

  if(!(peges +1 > pageCount)){
    console.log("next");
    setPages(peges + 1);
   let  startIndex =(pageNo-1)*pageSize;
   let peginetedPost = lodash(Records).slice(startIndex).take(pageSize).value()
   setPeginetor(peginetedPost);
  }

}

const selectedRow =(e)=>{
 // const {orderNo,orderDate,customerName} =Records
 peginetor.map((value,index)=>{

   if(value.orderNo ==e.target.value){
     //console.log(index)
    setMatch(value.orderNo)
    
   }
  })
}



      
    





  // const columns =[
  //   { Header:"Id",accessor:"id"},
  //   { Header:"OrderNo",accessor:"orderNo"},
  //   { Header:"OrderDate",accessor:"orderDate"},
  //   { Header:"City",accessor:"city"},
  //   { Header:"CustomerName",accessor:"customerName"},
    

  //   { Header:"OderValue",accessor:"OderValue"},
  
  
  
  // ]
  
  // const tableInstance =useTable({
  //   columns:columns,
  //   data:Records,
  // })
   

  // const {getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow} =tableInstance;

  console.log(pageCount)
  if(pageCount === 1) return null;
  return (
    <>
    <div className='importData'>
<div className='refresh'><button className='refresh-button' onClick={refreshData}>Refresh</button></div>
{/* 
<table {...getTableProps()}>
  <thead>
    {headerGroups.map((headerGroups)=>(



      <tr {...headerGroups.getHeaderGroupProps()}>
        {headerGroups.headers.map((column)=>(
          <th {...column.getHeaderProps()}>
            {column.render("Header")} </th>

    ))}
       
    </tr>
    ))}
    
  </thead>
  <tbody {...getTableBodyProps()}>

     {
       rows.map((row)=>{
         prepareRow(row)
         return(
          <tr {...row.getRowProps()}>
            {
              row.cells.map((cell)=>{
                return <td {...cell.getCellProps()}>{cell.render("cell")}</td>
       })
            }
          
        </tr>
         )

          })
     }


   
  </tbody>
</table> */}



 
{/* <BootstrapTable keyField="id" columns={columns} data={Records}      /> */}

 <table className='contain-table'>
        <thead>

          <tr>
            <th></th>
            <th className='up'><input type="checkbox"    /></th>
            <th className='up'>Channel</th>

            <th>order No  <input className="form-control" id='oderNo' type="text"  onChange={selectedRow}
            style={{width
              :"150px",marginLeft:"50px"}}></input></th>
            <th>order Date  <input className="form-control" id='oderDate' type="text"style={{width
            :"150px",marginLeft:"50px"}}></input></th>
            <th className='up'>city</th>
            <th>costomer name  <input className="form-control" type="text" style={{width
            :"150px",marginLeft:"50px"}} ></input></th>
            <th className='up'>oder value</th>
            <th className='up'>Status</th>

            <th className='up'>opration</th>
          </tr>

        </thead>
        {peginetor.map((record) => {

          return (
            <tbody key={record.id} className="tebleBody">
              <tr>
              <td><i className="fa-solid fa-plus"></i></td>
              <td><input type="checkbox" /></td>
              <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXC5Be2rNkj3IcgjeYgGXZxVpKuGMWLCKjGA&usqp=CAU" alt="" style={{ width: "30px" }} /></td>
              <td>{match ? match :record.orderNo }</td>
              <td>{today}-{month}-{year}</td>
              <td>{record.city}</td>
              <td>{record.customerName}</td>
              <td>{record.OderValue}</td>
              <td><button className='pending-Button'>pending</button></td>
              <td><select name="ActionList" id="Action">
                <option value="Action">Action</option>
                <option value="Action1">Action1</option>
                <option value="Action2">Action2</option>



              </select></td>
              </tr>
        
            </tbody>
          )

        })
        }



      </table>
      

   
    </div>

<nav aria-label="Page navigation example" className='pagin'>
<ul className="pagination">
  <li className="page-item">
    <a className="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true" aria-disabled={peges<=1} onClick={()=>{priviousPage(peges)}}>&laquo;</span>
    </a>
  </li>
  <li className="page-item"><a className="page-link" href="#">{peges}</a></li>
  

  <li className="page-item">
    <a className="page-link" href="#" aria-label="Next">
      <span aria-hidden="true" onClick={()=>{nextPage(peges)}}>&raquo;</span>
    </a>
  </li>
</ul>
</nav>
</>
  )
}
