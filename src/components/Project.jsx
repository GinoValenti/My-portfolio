import React from 'react'
import motorx from "../image.jpg"
import mytini from "../tiny.jpg"
import captura from "../Captura.PNG"
function Project  ()  {
  return (
    <section class="services" id="services">
    <div class="heading">
        <h2>Projects</h2>
        <span>My Projects</span>
    </div>
    <div class="services-content">

      
<div class="container">
<div class="card">
		<figure class="card__thumb">
			<img src={motorx} alt="Picture by Nathan Dumlao" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">Motor X</h2>
				<p class="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
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
				<p class="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
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
				<p class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
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