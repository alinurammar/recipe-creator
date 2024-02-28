import React from 'react';
import Recipe from './Recipe';
import './RecipeLayout.css';

interface RecipeData {
  id: number;
  title: string;
  body: string;
}

interface RecipeLayoutProps {
  recipes: RecipeData[];
}

const RecipeLayout: React.FC<RecipeLayoutProps> = ({ recipes }) => {
  return (
    <div className="recipe-layout">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} id={recipe.id} title={recipe.title} body={recipe.body} />
      ))}
    </div>
  );
};

export default RecipeLayout;
