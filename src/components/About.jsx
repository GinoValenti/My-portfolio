import React from 'react'
import foto from "../yo-gitii.png"
import AOS from 'aos';
import phone from "../assets/ring-phone.png"
import linke from "../assets/linkedin.png"
import email from "../assets/email.png"
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function About(){
  return (
    <section   class="about" id="about">
    <div   class="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
    </div>

    <div  data-aos="fade-up"
  
 
   
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" class="about-container">
        <div class="about-img">
            <img src={foto} alt=""/>
        </div>
        <div class="about-text">
            <p>Hello! I'm a 𝗙𝘂𝗹𝗹 𝘀𝘁𝗮𝗰𝗸 𝗠𝗘𝗥𝗡 Developer from MindHub👨🏻‍💻 who loves to create aesthetic and functional web applications. I am a highly motivated professional who loves to work in challenging environments that allow me to grow and improve my skills. I have more than 800 hours in a simulated real work environment in which to carry out some projects that you can see on my GitHub.
I am passionate about solving problems, design, teamwork and constantly learning. With all my knowledge I am sure that I can contribute great ideas and solutions. You will have the best of me working on demanding projects, implementing AGILE.</p>
            <div class="information">
                <div class="info-box">
               <img src={linke} alt="" />
                    <a className='a-about' target="_blank" href="https://www.linkedin.com/in/gino-valenti/">Gino Roman Valenti</a>
                </div>

                <div class="info-box">
                   <img src={phone} alt="" />
                    <span>+54 3415058379</span>
                </div>

                <div class="info-box">
                    <img src={email} alt="" />
                    <a className='mail maildark' target="_blank" href="mailto:ginorvalenti@gmail.com"> ginorvalenti@gmail.com</a>
                </div>
               
             
            </div>
         
        </div>
    </div>
</section>
  )
}
export default About