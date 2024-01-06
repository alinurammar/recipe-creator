import { useState } from 'react';
import axios from 'axios';
import RecipeLayout from './components/RecipeLayout'
import IngredientInput from './components/IngredientInput';
import './App.css';

function App() {
  const [recipeList, setRecipeList] = useState<any>([]);
  
  const handleEnterPress = (ingredientList: string,  checkedCheckboxes: string) => {
    console.log('Enter key pressed. Sending Ingredients to Backend.');
    // Add the action you want to perform on "Enter" key press
    const apiUrl = 'http://127.0.0.1:5000/ingredients';
    axios.post(apiUrl , { ingredients: ingredientList, filters: checkedCheckboxes })
      .then(response => {
        let responseDataString = response.data['message'];
        try {
          let responseData: any[] = JSON.parse(responseDataString);
          setRecipeList(responseData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => {
        console.error('Error sending data to the backend:', error);
      });

  };
  return (
    <div>
      <h1>Recipe App</h1>
      <IngredientInput onEnterPress={handleEnterPress} />
      <RecipeLayout recipes={recipeList} />
    </div>
  );
}

export default App;