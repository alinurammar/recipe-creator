import React, { useEffect, useState } from 'react';
import RecipeLayout from './components/RecipeLayout'
import sampleRecipes from './sampleRecipes'
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
  
  return (
    <div>
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
