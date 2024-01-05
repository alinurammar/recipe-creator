import React, { useEffect, useState } from 'react';
import IngredientInput from './IngredientInput';

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
    const handleIngredientChange = (value: string) => {
      console.log('Entered ingredients:', value);
      // You can perform additional logic with the entered value here
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Recipe App</h1>
      <IngredientInput onInputChange={handleIngredientChange} />
      <p>Goal is to make a call to our backend</p>
      <p>Ingredients: {ingredients && ingredients.ingredients}</p>
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
