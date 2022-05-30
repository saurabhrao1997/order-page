import React from 'react'
import "../css/navbar.css"
export default function navbar() {
  return (
    <div className='navbar'>
    <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLqpwslWoM0f4qSlMNCCUHAJbjn3Hzp4tkA&usqp=CAU" alt=" image loading" />

    
    <div className='float-right'>
    <i className="fa-solid fa-moon"></i>
    <i className="fa-solid fa-bell"></i>
    <img className='avtar' src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png" alt=" avtar images" />
    </div>
    </div>
  )
}
