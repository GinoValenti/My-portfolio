import React from 'react'
import foto from "../yo-gitii.png"
function About(){
  return (
    <section class="about" id="about">
    <div class="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
    </div>

    <div class="about-container">
        <div class="about-img">
            <img src={foto} alt=""/>
        </div>
        <div class="about-text">
            <p>¡Hola! Soy un desarrollador 𝗙𝘂𝗹𝗹 𝘀𝘁𝗮𝗰𝗸 𝗠𝗘𝗥𝗡 graduado de MindHub👨🏻‍💻 al que le encanta crear aplicaciones web estéticas y funcionales. Soy un profesional altamente motivado al que le encanta trabajar en entornos desafiantes que me permitan crecer y mejorar mis habilidades. Cuento con mas de 800 hs en un ambiente de trabajo real simulado en el cual realice algunos proyectos que podrán ver en mi GitHub.<br></br>Me apasiona resolver problemas, el diseño, el trabajo en equipo y aprender constantemente. Con todo mi conocimiento estoy seguro de que puedo aportar grandes ideas y soluciones. Tendrás lo mejor de mí trabajando en proyectos exigentes, implementando AGILE.</p>
            <div class="information">
                <div class="info-box">
                    <i class='bx bxs-user'></i>
                    <span>Gino Roman Valenti</span>
                </div>

                <div class="info-box">
                    <i class='bx bxs-phone'></i>
                    <span>+54 3415058379</span>
                </div>

                <div class="info-box">
                    <i class='bx bxs-envelope'> </i>
                    <a className='mail' href="mailto:ginorvalenti@gmail.com"> ginorvalenti@gmail.com</a>
                </div>
               
             
            </div>
         
        </div>
    </div>
</section>
  )
}
export default About