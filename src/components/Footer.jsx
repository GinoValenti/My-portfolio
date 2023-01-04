import React from 'react'
import { ImLinkedin ,ImEmbed2} from "react-icons/im";
import linke from "../assets/linkedin-112.png"
import {useTranslation} from "react-i18next"
import git from "../assets/logotipo-de-github.png"
function Footer ()  {
  const [t,i18n]=useTranslation("global")
  return (
    
    <div class="footer">
    <h2>{t("global.footer")}</h2>
    <div class="footer-social">
       <a target="_blank" href="https://www.linkedin.com/in/gino-valenti/"><img src={linke} alt="" /> </a>
        <a target="_blank" href="https://github.com/GinoValenti"><img src={git} alt="" /></a>
   
    </div>

</div>
  )
}
export default Footer