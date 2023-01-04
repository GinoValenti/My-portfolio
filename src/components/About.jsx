import React from 'react'
import foto from "../yo-gitii.png"
import AOS from 'aos';
import phone from "../assets/ring-phone.png"
import linke from "../assets/linkedin.png"
import email from "../assets/email.png"
import {useTranslation} from "react-i18next"
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function About(){
    const [t,i18n]=useTranslation("global")
  return (
    <section   class="about" id="about">
    <div   class="heading">
        <h2>{t("global.tittle-about")}</h2>
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
            <p>{t("global.about")}</p>
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