import React from 'react'
import motorx from "../image.jpg"
import mytini from "../tiny.jpg"
import captura from "../Captura.PNG"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Project  ()  {
  return (
    <section class="services" id="projects">
    <div class="heading">
        <h2>Projects</h2>
        <span>Some of my projects</span>
    </div>
    <div class="services-content">

      
<div class="container">
<div class="card">
		<figure class="card__thumb">
			<img src={motorx} alt="Picture by Nathan Dumlao" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">Motor X</h2>
				<p class="card__snippet">Application dedicated to lovers of high-end vehicles, in it
you can see all the available models, consult a budget
and also buy brand merch.
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
				<p class="card__snippet">Application designed for travelers, in it you can find your
ideal vacation, it has a section of hotels and cities where
you can leave comments about your experience and
reactions to different itineraries.</p>
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
				<p class="card__snippet">E-commerce application created for your best friend, in
it you can find toys and remedies for pets
</p>
                <div className='buttons'>

                <a href="https://petshop-mindy.netlify.app/" target="_blank" class="card__button">Page</a>
                <a target="_blank" href="https://github.com/GinoValenti/Pet-Shop-Mindy" class="card__button">Code</a>
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