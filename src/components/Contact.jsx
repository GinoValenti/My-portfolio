import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
function Contact () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState("Hey There! How are you doing? I'm interested in working with you. Let's talk!")
  console.log(name);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm('service_7qihqgg', 'template_q0e67hq', form.current, 'oGJNR-GvxvXoNBIAL')
      .then((result) => {

          Swal.fire("Gracias! Me contactare contigo pronto")
         
setEmail("")
        setName("")
        setMessage("")
    
      }, (error) => {
       
          Swal.fire("?")

      });
  };
  return (
    <section class="contact" id="contact">
        <div class="heading">
        <h2>Contact</h2>
        <span>Connect With Me</span>
    </div>
    <div class="contact-form">
    <form id='contact' ref={form} onSubmit={sendEmail}>
      <label for="from_name">Name</label>
      <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name="from_name" />
      <label for="email_id">Email</label>
      <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email_id" />
      <label for="message">Message</label>
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} cols="30" rows="10" placeholder="Write Message Here..." name="message" />
      <input class="contact-button" type="submit" value="Send" />
    </form>
    </div>
       </section>

  )
}
export default Contact