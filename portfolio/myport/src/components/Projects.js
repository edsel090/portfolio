// Projects.js 
import React from 'react'; 
import { FontAwesomeIcon } 
  from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Projects = () => { 
  const breadcrumbsPaths = 
    [ 
      { title: 'Home', to: '/' }, 
      { title: 'Projects', to: '/projects' } 
    ]; 

  return ( 
    <section id="projects"
      className="container text-center"> 
      <Breadcrumbs paths={breadcrumbsPaths} /> 
      <h2 className="section-title"> 
        <FontAwesomeIcon icon={faCode} 
          className="mr-2" /> 
        Projects 
      </h2> 
      <div className="row"> 
        {/* Project 1 */} 
        <div className="col-md-6"> 
          <div className="card mb-4"> 
            <div className="card-body"> 
              <h5 className="card-title"> 
                This Portfolio Website
              </h5> 
              <p className="card-text"> 
                Used react, bootstrap, and CSS to create this website.
              </p> 
            </div> 
          </div> 
        </div> 
        {/* Project 2 */} 
        <div className="col-md-6"> 
          <div className="card mb-4"> 
            <div className="card-body"> 
              <h5 className="card-title"> 
               WildFire Tracker
              </h5> 
              <p className="card-text"> 
                Created a real-time wildfire tracker using the google maps API and a wildfire data API from NASA. I also used react and bootstrap to create the UI. 
              </p> 
            </div> 
          </div> 
        </div> 
        {/* Project 3 */} 
        <div className="col-md-6"> 
          <div className="card mb-4"> 
            <div className="card-body"> 
              <h5 className="card-title"> 
                Audio Player
              </h5> 
              <p className="card-text"> 
                Wrote a simple audio player using python that will read documents and play them as audio.
              </p> 
            </div> 
          </div> 
        </div> 
        {/* Project 4 */} 
        <div className="col-md-6"> 
          <div className="card mb-4"> 
            <div className="card-body"> 
              <h5 className="card-title"> 
                 Coming Soon... 
              </h5> 
              <p className="card-text"> 
                Under Development. 
              </p> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Projects;