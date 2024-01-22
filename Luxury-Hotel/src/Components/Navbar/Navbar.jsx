import React from 'react'
import style from './Navbar.module.css'
import logo from '../../../public/logo.png'
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
    </nav>
  )
}

export default Navbar