import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <div className="main-container">
                <div className="section">
                    <div className="title">How It Works</div>
                    <div className="subtitle">
                        Our Recipe Generator uses advanced algorithms and a vast database of ingredients and flavors to create personalized recipes just for you.
                        Simply tell us your dietary preferences, available ingredients, and desired cooking time, and we'll generate a customized recipe that suits your needs.
                    </div>
                </div>
                <div className="section">
                    <div className="title">Benefits of Using Recipe Generator</div>
                    <div className="subtitle">
                        <ul>
                            <li>
                                Save time and effort by letting our algorithm do the hard work of recipe planning for you.
                            </li>
                            <li>
                                Discover new and exciting recipes that you may have never thought of before.
                            </li>
                            <li>
                                Reduce food waste by using up ingredients you already have in your pantry.
                            </li>
                            <li>
                                Adapt recipes to your dietary preferences, whether you're vegan, gluten-free, or have any other dietary restrictions.
                            </li>
                            <li>
                                Get creative in the kitchen and experiment with different flavors and ingredients.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
