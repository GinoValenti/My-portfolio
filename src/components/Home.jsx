import React from 'react'
import { ImLinkedin ,ImEmbed2} from "react-icons/im";
import "../App.css"
import {useTranslation} from "react-i18next"
import cv from "../assets/Gino-Valenti.pdf"
 function Home() {
    const [t,i18n]=useTranslation("global")
  return (
    <div class="home" id="home">
    <div class="social">
        <a target="_blank" href="https://www.linkedin.com/in/gino-valenti/"><ImLinkedin /></a>
    </div>
    <div class="home-img">
        <img src="main.png" alt=""/>
    </div>
    <div class="home-text">
        <span>{t("global.Hello, I'm")}</span>
        <h1>Gino</h1>
        <h2>Full Stack Developer</h2>
       <p>{t("global.who")}</p>
        <a download="CV-Gino-Valenti" href={cv} class="btn">{t("global.download")}</a>
    </div>
</div>
  )
}
export default Home