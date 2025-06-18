// Contact.js 
import React from 'react'; 
import { FontAwesomeIcon } 
  from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } 
  from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } 
  from '@fortawesome/free-brands-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Contact = () => { 
  const breadcrumbsPaths = 
    [ 
      { title: 'Home', to: '/' }, 
      { title: 'Contact', to: '/contact' } 
    ]; 

  return ( 
    <section id="contact" className="container"> 
      <Breadcrumbs paths={breadcrumbsPaths} /> 
      <h2 className="section-title">Contact</h2> 
      <p className="section-description"> 
        Feel free to reach out for
        collaboration or inquiries. 
      </p> 
      <ul className="contact-list list-unstyled"> 
        <li> 
          <a href="mailto:edselh702@gmail.com" target="_blank" rel="noopener noreferrer"> 
          <FontAwesomeIcon icon={faEnvelope} 
            className="contact-icon" /> 
          edselh702@gmail.com 
            </a>
        </li> 
        <li> 
          <a href="https://www.linkedin.com/in/edsel-hernandez/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} 
            className="contact-icon" /> 
          https://www.linkedin.com/in/edsel-hernandez/ 
            </a>
        </li> 
        <li> 
          <a href="https://github.com/edsel090" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} 
            className="contact-icon" /> 
          https://github.com/edsel090 
            </a>
        </li> 
        <li> 
          <FontAwesomeIcon icon={faPhone} 
            className="contact-icon" /> 
          (702)937-2965
        </li> 
      </ul> 
    </section> 
  ); 
}; 

export default Contact;