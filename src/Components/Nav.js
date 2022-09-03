import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
   
  return (
    <div>

<div class="main_menu">

    <div class="navbar">
        <i class="fa-solid fa-bars"></i>
    </div>

    <div class="menu_img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png" alt="" />
        </div>

    <div class="menu_item_2">

        <div class="item2_2">
        <ul>
            
            <li><Link to="/az">HELTHY & A-Z</Link></li>
            <li><Link to="drugs">DRUGS & SUPPLIESMENT</Link></li>
            <li><Link to="living">LIVING HELTHY</Link></li>
            <li><Link to="family">FAMILY & PREGNANCY</Link></li>
            <li><Link to="news">NEWS & EXPERTS</Link></li>
        </ul>
    </div>
</div>

 <div class="menu_item_3">
     {/* <div class="item3">
        <ul>
            <li><a href="nnnnnn"></a>SUBSCRIBE</li>
        </ul>
    </div>  */}

<button type='submit'>Subscribe</button>

    <input type="search" placeholder="Search"/>
    <i class="fa-solid fa-magnifying-glass"></i>
    
 </div>
</div>

    </div>
  )
}
