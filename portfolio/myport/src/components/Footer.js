// Footer.js 
import React from 'react'; 
import { FontAwesomeIcon } 
  from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub } 
  from '@fortawesome/free-brands-svg-icons'; 
import './style.css'; // Import your custom CSS file 

const Footer = () => { 
return ( 
  <footer className="footer"> 
  <div className="container"> 
    <div className="row"> 
    <div className="col-md-6"> 
    </div> 
    <div className="col-md-6 text-md-right"> 
      <ul className="social-icons list-unstyled"> 
      <la> 
        <a 
href="https://www.linkedin.com/in/edsel-hernandez/" target="_blank" rel="noopener noreferrer"> 
        <FontAwesomeIcon icon={faLinkedin} /> 
        </a> 
        </la>
        
      <la> 
        <a href= 
"https://github.com/edsel090" target="_blank" rel="noopener noreferrer"> 
        <FontAwesomeIcon icon={faGithub} /> 
        </a> 
      </la> 
      </ul> 
    </div> 
    </div> 
  </div> 
  </footer> 
); 
}; 

export default Footer;
