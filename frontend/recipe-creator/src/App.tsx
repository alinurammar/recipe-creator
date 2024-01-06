import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeLayout from './components/RecipeLayout'
import sampleRecipes from './sampleRecipes'
import IngredientInput from './components/IngredientInput';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const handleIngredientChange = (value: string) => {
    console.log('Entered ingredients:', value);

    // You can perform additional logic with the entered value here
  };

  const handleEnterPress = (ingredientList: string) => {
    console.log('Enter key pressed. Sending Ingredients to Backend.');
    // Add the action you want to perform on "Enter" key press
    const apiUrl = 'http://127.0.0.1:5000/ingredients';
    axios.post(apiUrl , { ingredients: ingredientList })
      .then(response => {
        console.log('Backend response:', response.data);
        // let data = JSON.parse(str(response.data))['message'];
        // setRecipes(data);
      })
      .catch(error => {
        console.error('Error sending data to the backend:', error);
        // Handle the error
      });

  };
  return (
    <div>
      <h1>Recipe App</h1>
      <IngredientInput onInputChange={handleIngredientChange} onEnterPress={handleEnterPress} />
      <RecipeLayout recipes={recipes} />
    </div>
  );
}

export default App;
