import React from 'react'
import "../App.css"
 function Home() {
  return (
    <div class="home" id="home">
    <div class="social">
        <a href="#"><i class='bx bxl-github'></i></a>
        <a href="#"><i class='bx bxl-instagram'></i></a>
        <a href="#"><i class='bx bxl-facebook'></i></a>
    </div>
    <div class="home-img">
        <img src="main.png" alt=""/>
    </div>
    <div class="home-text">
        <span>Hello, I'm</span>
        <h1>Gino</h1>
        <h2>Frontend Developer</h2>
       <p>Lorem ipsum dolor sit amet cons  adipisicing elit. Minima, consectetur  ullam?</p>
        <a href="#contact" class="btn">Download CV</a>
    </div>
</div>
  )
}
export default Home