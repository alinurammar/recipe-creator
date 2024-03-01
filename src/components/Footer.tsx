import React from 'react';
import './Footer.css';
const form_feedback = 'https://forms.gle/8JDepMDFdps42A3c8';

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href={form_feedback} target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} PantryPal. No rights reserved. None of them!
                </div>
            </div>
        </footer>
    );
};

export default Footer;
