import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <div className="top-container">
                <div className="header-section">
                    <div className="logo-section">
                        <div className="logo-container">
                            <div className="logo-element" />
                        </div>
                    </div>
                    <div className="welcome-section">
                        <div className="title">Welcome to PantryPal!</div>
                        <div className="welcome-subtitle">We're excited to have you here. Let's get started!</div>
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className="section">
                    <div className="title">About Us</div>
                    <div className="body">
                        At PantryPal, we believe that cooking should be fun, easy, and accessible to everyone.
                        Our mission is to help you discover new recipes, unleash your creativity in the kitchen, and enjoy delicious meals with your loved ones.
                    </div>
                </div>
                <div className="section">
                    <div className="title">How It Works</div>
                    <div className="body">
                        Our Recipe Generator uses advanced algorithms and a vast database of ingredients and flavors to create personalized recipes just for you.
                        Simply tell us your dietary preferences, available ingredients, and desired cooking time, and we'll generate a customized recipe that suits your needs.
                    </div>
                </div>
                <div className="section">
                    <div className="title">Benefits of Using Recipe Generator</div>
                    <div className="body">
                        Save time and effort by letting our algorithm do the hard work of recipe planning for you.
                        <br />
                        Discover new and exciting recipes that you may have never thought of before.
                        <br />
                        Reduce food waste by using up ingredients you already have in your pantry.
                        <br />
                        Adapt recipes to your dietary preferences, whether you're vegan, gluten-free, or have any other dietary restrictions.
                        <br />
                        Get creative in the kitchen and experiment with different flavors and ingredients.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
