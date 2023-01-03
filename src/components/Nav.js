import React from 'react'
import "../App.css"
function Nav() {
  return (
    <header>
    <a href="#" class="logo">Gino <span> Valenti</span></a>

    <div class="bx bx-menu" id="menu-icon"></div>

    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <div class="bx bx-moon" id="darkmode"></div>
    </ul>
</header>
  )
}
export default Nav