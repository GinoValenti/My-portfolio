import React from 'react'
import motorx from "../image.jpg"
import mytini from "../tiny.jpg"
import captura from "../Captura.PNG"
import AOS from 'aos';
import {useTranslation} from "react-i18next"
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Project  ()  {
	const [t,i18n]=useTranslation("global")
  return (
    <section class="services" id="projects">
    <div class="heading">
        <h2>{t("global.nav-projects")}</h2>
        <span>{t("global.span-projects")}</span>
    </div>
    <div class="services-content">

      
<div class="container">
<div class="card">
		<figure class="card__thumb">
			<img src={motorx} alt="Picture by Nathan Dumlao" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">Motor X</h2>
				<p class="card__snippet">{t("global.card-motor")}
</p>
                <div className='buttons'>

<a target="_blank" href="https://motorx.vercel.app/" class="card__button">Page</a>
<a target="_blank" href="https://github.com/GinoValenti/final-project-mindhub" class="card__button">Code</a>
</div>
			</figcaption>
		</figure>
	</div>

	<div class="card">
		<figure class="card__thumb">
			<img src={mytini} alt="Picture by Nathan Dumlao" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">My tinerary</h2>
				<p class="card__snippet">{t("global.card-traver")}</p>
                <div className='buttons'>

<a href="https://mytinerary-netrunners.vercel.app/" target="_blank" class="card__button">Page</a>
<a href="https://github.com/GinoValenti/mytinerary-netrunners" target="_blank" class="card__button">Code</a>
</div>
			</figcaption>
		</figure>
	</div>

	<div class="card">
		<figure class="card__thumb">
			<img src={captura} alt="Picture by Daniel Lincoln" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">PetShop Mindy</h2>
				<p class="card__snippet">{t("global.card-pet")}
</p>
                <div className='buttons'>

                <a href="https://ginovalenti.github.io/Pet-Shop-Mindy/" target="_blank" class="card__button">Page</a>
                <a target="_blank" href="https://github.com/GinoValenti/Pet-Shop-Mindy" class="card__button">Code</a>
                </div>
			</figcaption>
		</figure>
	</div>
	<div class="card">
		<figure class="card__thumb">
			<img src="https://www.commercialriskeurope.com/wp-content/uploads/2021/10/images2823-6156b45255132.jpg" alt="Picture by Nathan Dumlao" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">Amazing Events</h2>
				<p class="card__snippet">{t("global.card-amazing")}
</p>
                <div className='buttons'>

<a target="_blank" href="https://ginovalenti.github.io/amazing-events/" class="card__button">Page</a>
<a target="_blank" href="https://github.com/GinoValenti/amazing-events" class="card__button">Code</a>
</div>
			</figcaption>
		</figure>
	</div>
</div>



   

      
        
    </div>
    </section>
  )
}
export default Project