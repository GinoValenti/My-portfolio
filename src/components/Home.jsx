import React from 'react'
import { ImLinkedin ,ImEmbed2} from "react-icons/im";
import "../App.css"

import cv from "../assets/Gino-Valenti.pdf"
 function Home() {
  return (
    <div class="home" id="home">
    <div class="social">
        <a target="_blank" href="https://www.linkedin.com/in/gino-valenti/"><ImLinkedin /></a>
    </div>
    <div class="home-img">
        <img src="main.png" alt=""/>
    </div>
    <div class="home-text">
        <span>Hello, I'm</span>
        <h1>Gino</h1>
        <h2>Frontend Developer</h2>
       <p>Who loves to create aesthetic and functional web applications. </p>
        <a download="CV-Gino-Valenti" href={cv} class="btn">Download CV</a>
    </div>
</div>
  )
}
export default Home