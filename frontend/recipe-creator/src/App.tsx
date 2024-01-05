import React, { useEffect, useState } from 'react';
import RecipeLayout from './components/RecipeLayout'
import sampleRecipes from './sampleRecipes'
import IngredientInput from './components/IngredientInput';
import './App.css';

function App() {

  const handleIngredientChange = (value: string) => {
    console.log('Entered ingredients:', value);

    // You can perform additional logic with the entered value here
  };

  const handleEnterPress = () => {
    console.log('Enter key pressed. Perform your action here.');
    // Add the action you want to perform on "Enter" key press

  };
  return (
    <div>
      <h1>Recipe App</h1>
      <IngredientInput onInputChange={handleIngredientChange} onEnterPress={handleEnterPress} />
      <RecipeLayout recipes={sampleRecipes} />
    </div>
  );
}

export default App;
