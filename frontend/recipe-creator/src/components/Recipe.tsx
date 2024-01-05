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
    <div className={`recipe ${showBody ? 'expanded' : ''}`} onClick={toggleBody}>
      <h3>{title}</h3>
      {showBody && <p className="recipe-body">{body}</p>}
    </div>
  );
};

export default Recipe;
