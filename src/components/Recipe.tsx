import React, { useState } from 'react';
import './Recipe.css';

interface RecipeProps {
  id: number;
  title: string;
  body: string;
}

const Recipe: React.FC<RecipeProps> = ({ title, body }) => {
  const [showBody, setShowBody] = useState(false);

  const toggleBody = () => {
    setShowBody(!showBody);
  };

  return (
    <div className={`recipe-card ${showBody ? 'expanded' : ''}`} onClick={toggleBody}>
      <div className="recipe-header">
        <h3 className="recipe-title">{title}</h3>
      </div>
      <div className={`recipe-body ${showBody ? 'show' : ''}`}>
        {body.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
