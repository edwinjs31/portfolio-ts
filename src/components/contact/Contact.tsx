import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

import './contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; target: { reset: () => void } }) => {
    e.preventDefault();

    emailjs.sendForm('service_a7ezbm4', 'template_gxk7gzn', form.current, 'JEDoS-UNexrKGaYqr')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact_options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>edwinjs31@gmail.com</h5>
            <a href='mailto:edwinjs31@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Edwin Jaldin Sandoval</h5>
            <a href='https://www.linkedin.com/in/edwin-jaldin-sandoval-0068b9198/' target='_blank'>
              View Profile
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+34 686046064</h5>
            <a href='https://api.whatsapp.com/send?phone=34686046064' target='_blank'>
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
