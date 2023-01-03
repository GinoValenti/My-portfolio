import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_q0e67hq', form.current, 'oGJNR-GvxvXoNBIAL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form id='contact' ref={form} onSubmit={sendEmail}>
      <label for="from_name">Name</label>
      <input type="text" name="from_name" />
      <label for="email_id">Email</label>
      <input type="email" name="email_id" />
      <label for="message">Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}
export default Contact