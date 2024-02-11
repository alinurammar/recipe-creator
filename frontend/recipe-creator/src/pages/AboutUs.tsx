import React from 'react';
import './AboutUs.css';

import ammarPfp from '../assets/Ammar_Profile.jpg';
import imadPfp from '../assets/Imad_Profile.jpg';

const AboutUs = () => {
    return (
        <div className='container'>
            <div className="section">
                <div className="title">About Us</div>
                <div className="subtitle">
                    At PantryPal, we believe that cooking should be fun, easy, and accessible to everyone.
                    Our mission is to help you discover new recipes, unleash your creativity in the kitchen, and enjoy delicious meals with your loved ones.
                </div>
            </div>
            <div className="section">
                <div className="title">Our Team</div>
                <div className="team-members">
                    <div className="member">
                        <img src={ammarPfp} alt="Ammar Alinur" />
                        <div className="name">Ammar Alinur</div>
                        <div className="position">Coder</div>
                    </div>
                    <div className="member">
                        <img src={imadPfp} alt="Imad Hussein" />
                        <div className="name">Imad Hussein</div>
                        <div className="position">Professional Cooker</div>
                    </div>
                    <div className="member">
                        <img src={ammarPfp} alt="Imran Hussein" />
                        <div className="name">Imran Hussein</div>
                        <div className="position">Banned From Kitchen</div>
                    </div>
                    <div className="member">
                        <img src={ammarPfp} alt="Akram Hassan" />
                        <div className="name">Akram Hassan</div>
                        <div className="position">Professional Yapper</div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="title">Our Story</div>
                <div className="subtitle">
                    <p>Founded by a group of college students and recent grads from Stanford, UT Austin, PantryPal was born out of our shared experience as busy students.
                        That's why we created PantryPal - to streamline the cooking process, cut costs, and inspire culinary creativity. Our journey is fueled by our passion for technology and our love for good food.</p>
                    <p>As young adults, we understand the demands of a hectic work schedule and the importance of finding efficient solutions. Learning to cook has been a challenge for us, but also an opportunity to get creative and save money.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
