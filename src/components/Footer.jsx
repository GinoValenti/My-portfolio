import React from 'react'
import { ImLinkedin ,ImEmbed2} from "react-icons/im";
import linke from "../assets/linkedin-112.png"
import git from "../assets/logotipo-de-github.png"
function Footer ()  {
  return (
    <div class="footer">
    <h2>Get in touch!</h2>
    <div class="footer-social">
       <a target="_blank" href="https://www.linkedin.com/in/gino-valenti/"><img src={linke} alt="" /> </a>
        <a target="_blank" href="https://github.com/GinoValenti"><img src={git} alt="" /></a>
   
    </div>

</div>
  )
}
export default Footer