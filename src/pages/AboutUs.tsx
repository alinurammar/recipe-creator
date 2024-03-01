import React from 'react';
import './AboutUs.css';

import ammarPfp from '../assets/Ammar_Profile.jpg';
import imadPfp from '../assets/Imad_Profile.jpg';
import akramPfp from '../assets/Akram_Profile.jpeg';
import imranPfp from '../assets/Imran_Profile.jpg';

const LinkedInIcon = <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png' alt='LinkedIn'></img>
const GitHubIcon = <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='LinkedIn'></img>

const AboutUs = () => {
    return (
        <div className='container'>
            <div className="section">
                <div className="title">About Us</div>
                <div className="subtitle">
                    We want to bring back fun, easy, and accessible cooking. Cooking shouldn't break the bank - and our goal is to help you truly discover what you have at home.
                </div>
            </div>


            <div className="section">
                <div className="title">How did you build it?</div>
                <div className="subtitle">
                    We use AI. Curious? Check out our code:
                    <div className="how-code-works">
                        <a href="https://github.com/alinurammar/recipe-generator-backend" target="_blank" rel="noopener noreferrer">Backend (Prompting & API)</a>
                        <a href="https://github.com/alinurammar/recipe-creator" target="_blank" rel="noopener noreferrer">Frontend (Design & Site)</a>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="title">How do you make money?</div>
                <div className="subtitle">
                    We save so much on groceries and now we have a newfound budget for side projects!
                </div>
            </div>

            <div className="section">
                <div className="title">Our Story</div>
                <div className="subtitle">
                    We are NOT a startup! Just college students and new grads trying to convert our engineering & product skills to cooking skills. AI will replace us soon so we're just getting a head start back to the kitchen.
                </div>
            </div>
            <div className="section">
                <div className="title">Our Team</div>
                <div className="team-members">
                    <div className="member">
                        <img src={ammarPfp} alt="Ammar Alinur" />
                        <div className="name">Ammar Alinur</div>
                        <div className="position">Coder</div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/ammar-alinur/" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">{LinkedInIcon}</div>
                            </a>
                            <a href="https://github.com/alinurammar" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">{GitHubIcon} </div>
                            </a>
                        </div>
                    </div>
                    <div className="member">
                        <img src={imadPfp} alt="Imad Hussein" />
                        <div className="name">Imad Hussein</div>
                        <div className="position">Aspiring Chef</div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/imad-hussein/" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">{LinkedInIcon}</div>
                            </a>
                            <a href="https://github.com/imad022" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">{GitHubIcon} </div>
                            </a>
                        </div>
                    </div>
                    <div className="member">
                        <img src={imranPfp} alt="Imran Hussein" />
                        <div className="name">Imran Hussein</div>
                        <div className="position">Banned From Kitchen</div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/imran-hussein/" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">{LinkedInIcon}</div>
                            </a>
                            <a href="https://github.com/imranh-2" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">{GitHubIcon} </div>
                            </a>
                        </div>
                    </div>
                    <div className="member">
                        <img src={akramPfp} alt="Akram Hassan" />
                        <div className="name">Akram Hassan</div>
                        <div className="position">Professional Yapper</div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/akram-hassen/" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">{LinkedInIcon}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
