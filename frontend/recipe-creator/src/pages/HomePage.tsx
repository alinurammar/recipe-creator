import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import cookingRobot from '../assets/cooking_robot.png';

const HomePage = () => {
    return (
        <div>
            <div className="main-container">
                <div className="section">
                    <div className="title">Discover Personalized Recipes</div>
                    <div className="subtitle">
                        PantryPal crafts custom recipes from your ingredients and preferences. Tell us what you have, what you like, and how much time you have, and let our AI whip up something delicious. Explore endless culinary adventures with PantryPal!
                    </div>
                </div>

                <img src={cookingRobot} alt="Cooking" className="image" />

                <div className="section">
                    <div className="section">
                        <div className="title">How It Works</div>
                        <div className="subtitle">
                            Get Personalized Recipes in Three Simple Steps<br />
                            <ol>
                                <li>Share your available ingredients and dietary preferences with us.</li>
                                <li>Our smart recipe generator, powered by OpenAI's GPT-3 API, crafts custom recipes based on your input.</li>
                                <li>Receive your personalized recipe suggestions directly to your device and start cooking up a storm!</li>
                            </ol>
                        </div>
                    </div>

                </div>
                <div className="section">
                    <div className="title">Benefits of Using Recipe Generator</div>
                    <div className="subtitle">
                        <ul>
                            <li>
                                <span className="icon">⏱️</span> Save time and effort by letting our algorithm do the hard work of recipe planning for you.
                            </li>
                            <li>
                                <span className="icon">🍽️</span> Discover new and exciting recipes that you may have never thought of before.
                            </li>
                            <li>
                                <span className="icon">🥑</span> Reduce food waste by using up ingredients you already have in your pantry.
                            </li>
                            <li>
                                <span className="icon">🥗</span> Adapt recipes to your dietary preferences, whether you're vegan, gluten-free, or have any other dietary restrictions.
                            </li>
                            <li>
                                <span className="icon">🎨</span> Get creative in the kitchen and experiment with different flavors and ingredients.
                            </li>
                        </ul>
                    </div>
                    <div className="cta-container">
                        <Link to="/recipe-generator" className="cta-button">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
