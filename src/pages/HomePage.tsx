import { Link } from 'react-router-dom';
import './HomePage.css';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="title">What is PantryPal??!</div>
                    <div className="subtitle">
                        This is a side project aimed at inspiring you to cook.<br /><br />
                        We know you've been abusing DoorDash and UberEats - Let those drivers spend time with their families, we have food at home.
                    </div>
                </div>

                <div className="section testimonials">
                    <div className="title">Hear from our users...</div>
                    <Carousel />
                </div>

                <div className="section">
                    <div className="section">
                        <div className="title">How Does This Work?</div>
                        <div className="subtitle">
                            Tell us what’s in your pantry, and we'll help you come up with recipes. It's really simple - try it out!
                        </div>
                    </div>
                </div>

                <div className="cta-container">
                    <Link to="/recipe-generator" className="cta-button">Get Started</Link>
                </div>
            </div>
        </div >
    );
};

export default HomePage;
