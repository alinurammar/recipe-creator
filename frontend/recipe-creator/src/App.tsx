import React, { useEffect, useState } from 'react';
import RecipeLayout from './components/RecipeLayout'
import sampleRecipes from './sampleRecipes'
import IngredientInput from './components/IngredientInput';
import './App.css';
interface IngredientsData {
  ingredients: string;
}

function App() {
  const [ingredients, setIngredients] = useState<IngredientsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIngredients();
        setIngredients(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []); // Empty dependency array ensures the effect runs only once

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
      <p>Goal is to make a call to our backend</p>
      <p>Ingredients: {ingredients && ingredients.ingredients}</p>
      <RecipeLayout recipes={sampleRecipes} />
    </div>
  );
}

async function getIngredients(): Promise<IngredientsData> {
  const apiUrl = 'http://127.0.0.1:5000/ingredients';
  const resp = await fetch(apiUrl);

  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }

  return resp.json();
}

export default App;
