import React from 'react'

function Contact () {
  return (
    <section class="contact" id="contact">
    <div class="heading">
        <h2>Contact</h2>
        <span>Connect With Us</span>
    </div>
    <div class="contact-form">
        <form action="">
            <input type="text" placeholder="Your Name"/>
            <input type="email" name="" id="" placeholder="Your Email"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Write Message Here..."></textarea>
            <input type="button" value="Send" class="contact-button"/>
        </form>
    </div>
</section>
  )
}
export default Contact