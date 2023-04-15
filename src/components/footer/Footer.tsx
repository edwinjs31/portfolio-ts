import {BsInstagram, BsFacebook, BsLinkedin} from 'react-icons/bs'

import './footer.css'

export const Footer = () => {

  return (
    <footer>
      <a href="#" className='footer__logo'>EDWIN</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://es-es.facebook.com/"><BsFacebook/></a>
        <a href="https://www.instagram.com/"><BsInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EDWIN developer. All rights reserved.</small>
      </div>
    </footer>
  )
}
