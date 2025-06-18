// Breadcrumbs.js 
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } 
  from '@fortawesome/react-fontawesome'; 
import { faHome } 
  from '@fortawesome/free-solid-svg-icons'; 

const Breadcrumbs = ({ paths }) => { 
  return ( 
    <nav aria-label="breadcrumb"> 
      <ul className="breadcrumb"> 
        <li className="breadcrumb-item"> 
          <Link to="/"> 
            <FontAwesomeIcon icon={faHome} 
              style={{ color: '#007bff' }} /> 
          </Link> 
        </li> 
        {paths.map((path, index) => ( 
          <li key={index} 
            className={ 
              `breadcrumb-item${index === paths.length - 1 ? 
                ' active' : ''}` 
            }> 
            {index !== paths.length - 1 ? ( 
              <Link to={path.to}> 
                {path.title} 
              </Link> 
            ) : ( 
              <span>{path.title}</span> 
            )} 
          </li> 
        ))} 
      </ul> 
    </nav> 
    
  ); 
}; 

export default Breadcrumbs;