import React,{useState} from 'react';
import {Link} from "react-router-dom";
import style from './Navbar.module.css'
import logo from '../../../public/logo.png'
import menuIcon from '../../../public/menu_icon.png'
import { Route,Routes } from 'react-router-dom';

function Navbar() {
  const [menuOpen,setMenuopen]=useState(false)
  return (

    <nav className={style.navbar}>
        <div className={style.navBox}>
          <img src={logo} class={style.logo}alt="" />
          <div className={style.menuIcon} onClick={()=>{
            setMenuopen(!menuOpen);
          }}><img src={menuIcon} alt="" width='25px'/></div>
        </div>
        
        <ul className={menuOpen ? style.open : ''}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/contact-us">Contact-us</Link></li>
        </ul>
       
        
    </nav>
    
  )
}

export default Navbar