import React from 'react'
import "../App.css"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {NavLink} from 'react-router-dom'
function Nav() {
  const [t,i18n]=useTranslation("global")
  // Dark Mode / light mode
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");




  };
  

  
                                      
  return (
    <nav className="nav">
    <a href="#" className="nav__brand">
      Gino Valenti
    </a>
    <ul className={active}>
      <li className="nav__item">
        <a href="#home" className="nav__link">
          Home
        </a>
      </li>
      <li className="nav__item"><a href="#about" className="nav__link">{t("global.nav-about")}</a></li>
        <li className="nav__item"><a href="#services" className="nav__link">{t("global.nav-services")}</a></li>
        <li className="nav__item"><a href="#projects" className="nav__link">{t("global.nav-projects")}</a></li>
        <li className="nav__item"><a href="#contact" className="nav__link">{t("global.nav-contact")}</a></li>
        <div className='lenguage-container'>

        <li className="nav__item"><button  className="button-lenguage" onClick={()=>i18n.changeLanguage("es")}>ES</button></li>
        <li className="nav__item"><button  className="button-lenguage" onClick={()=>i18n.changeLanguage("en")}>EN</button></li>
        </div>
      

  
    </ul>
    <div onClick={navToggle} className={icon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
   /*  <header>
    <a href="#" class="logo">Gino <span> Valenti</span></a>

    <div  class="bx bx-menu" id="menu-icon"></div>

    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <div class="bx bx-moon" id="darkmode"></div>
    </ul>
</header> */
  )
}
export default Nav