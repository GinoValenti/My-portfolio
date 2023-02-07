import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {useTranslation} from "react-i18next"
import Loading from '../components/Loading/Loading'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 100,
  p: 4,
};
function Contact () {
  const [t,i18n]=useTranslation("global")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState("Hey There! How are you doing? I'm interested in working with you. Let's talk!")
  console.log(name);
  const form = useRef();

  const [show, setShow] = useState(false);

  const sendEmail = (e) => {

      setShow(true)
      e.preventDefault();
  
      
      emailjs.sendForm('service_7qihqgg', 'template_q0e67hq', form.current, 'oGJNR-GvxvXoNBIAL')
      .then((result) => {
          setShow(false)
          if(email.length || name.length   == 0){Swal.fire({text:"Please complete all fields",icon: 'error',}) }else{

            Swal.fire("Thanks! I will contact you soon")
          }
           
          setEmail("")
          setName("")
          
      
        }, (error) => {
         
            Swal.fire("?")
  
        });
    
  };
  const handleClose = () => setShow(false);
  return (
    <>
{
                show ? 
                <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Loading/>
                </Box>
              </Modal>
                 : <></>
              }
    <section class="contact" id="contact">
        <div class="heading">
        <h2>{t("global.nav-contact")}</h2>
        <span>{t("global.contact-span")}</span>
    </div>
    <div class="contact-form">
    <form id='contact' ref={form} onSubmit={sendEmail}>
      <label for="from_name">{t("global.name")}</label>
      <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name="from_name" />
      <label for="email_id">Email</label>
      <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="email_id" />
      <label for="message">{t("global.message")}</label>
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} cols="30" rows="10" placeholder="Write Message Here..." name="message" />
      <input class="contact-button" type="submit" value="Send" />
    </form>
    </div>
       </section>
</>
  )
}
export default Contact