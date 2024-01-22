import React from 'react'
import style from './Navbar.module.css'
import logo from '../../../public/logo.png'
import menuIcon from '../../../public/menu_icon.png'
function Navbar() {
  return (
    <nav className={style.navbar}>
        <div><img src={logo} class={style.logo}alt="" /></div>
        <ul className={style.links}>
            <li><a href="">Home</a></li>
            <li><a href="">Facilities</a></li>
            <li><a href="">Rooms</a></li>
            <li><a href="">Contact-us</a></li>
        </ul>
        <div className={style.menuIcon}><img src={menuIcon} alt="" width='25px'/></div>
    </nav>
  )
}

export default Navbar