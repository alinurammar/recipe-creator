import React, { useEffect, useState } from 'react';
import './Carousel.css';
import gordo from '../assets/gordon_ramfry.webp';
import chef from '../assets/chef_gusteau.webp';
import salty from '../assets/salty_bae.webp';
import swede from '../assets/swedish_chef.webp';
// import chef from '../assets/chef_gusteau.webp';
// Sample testimonials
const testimonials = [
    {
        id: 1,
        author: 'Chef Gusteau',
        text: 'If you can organize your kitchen, you can organize your life. PantryPal is like having a little Remy in your pocket!',
        imageUrl: chef,
    },
    {
        id: 2,
        author: 'The Swedish Chef',
        text: 'Bork, bork, bork! PantryPal turns my hodge-podge into haute cuisine!',
        imageUrl: swede,
    },
    {
        id: 3,
        author: 'Gordon Ramfry',
        text: 'PantryPal is the secret ingredient we’ve all been yelling for! It transforms kitchen nightmares into culinary dreams!',
        imageUrl: gordo,
    },
    {
        id: 4,
        author: 'Salty Bae',
        text: 'Sprinkle a little PantryPal on your pantry, and watch a dash of data do the dinner dance.',
        imageUrl: salty,
    },
];


const Carousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
        }, 6000); // Rotate every 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                        <img src={testimonial.imageUrl} alt={testimonial.author} className="testimonial-image" />
                        <blockquote className="testimonial-text">{testimonial.text}</blockquote>
                        <p className="testimonial-author">{testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;