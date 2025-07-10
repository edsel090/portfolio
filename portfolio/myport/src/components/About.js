//About.js
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="profile-image-container">
                        <img src="profile.jpg"
                            alt="Profile"
                            className="profile-image" />
                        <h2 className="section-title">
                            <h2 className="section-title">
                                <FontAwesomeIcon icon={faUser} 
                                className="d-block mx-auto mb-2 text-primary" size="3x" />
                            </h2>
                        </h2>
                    </div>
                    <p className="section-description mt-4">
                        I am a Computer Science student at UNLV with a couple years left in my degree. I’ve worked hands on in different roles like AV tech and pharmacy, but now I’m fully focused on getting into cloud computing. I’m currently learning AWS and working on building my skills through projects and certs. I’ve got experience with C++, assembly (x86 and MIPS), and some Python, but right now I’m more interested in infrastructure, deployment, and how cloud tech powers real world systems. Looking for internships or entry level roles where I can get more hands on experience in the cloud space. Always open to learning and connecting with others in tech.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;
