import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeLayout from './components/RecipeLayout'
import Recipe from './components/Recipe'
import sampleRecipes from './sampleRecipes'
import IngredientInput from './components/IngredientInput';
import './App.css';

function App() {
  const [recipeList, setRecipeList] = useState<any>([]);
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
        let responseDataString = response.data['message'];
        try {
          let responseData: any[] = JSON.parse(responseDataString);
          setRecipeList(responseData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          // Handle the error as needed
        }
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
      <RecipeLayout recipes={recipeList} />
    </div>
  );
}

export default App;
