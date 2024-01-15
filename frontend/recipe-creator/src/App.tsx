import { useState } from 'react';
import axios from 'axios';
import RecipeLayout from './components/RecipeLayout'
import IngredientInput from './components/IngredientInput';
import LoadingIcon from './components/LoadingIcon';
import './App.css';
// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  const [recipeList, setRecipeList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const port = process.env.PORT;
  const databaseUrl = process.env.DATABASE_URL;
  const handleEnterPress = (ingredientList: string,  checkedCheckboxes: string) => {
    console.log('Enter key pressed. Sending Ingredients to Backend.');
    // Add the action you want to perform on "Enter" key press
    const apiUrl = databaseUrl + ':' + port + '/ingredients';
    // const apiUrl = 'http://127.0.0.1:5000/ingredients';
    console.log(apiUrl)
    setLoading(true);
    axios.post(apiUrl , { ingredients: ingredientList, filters: checkedCheckboxes })
      .then(response => {
        let responseDataString = response.data['message'];
        try {
          let responseData: any[] = JSON.parse(responseDataString);
          if (Array.isArray(responseData)) {
            setRecipeList(responseData);
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        } finally {
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error sending data to the backend:', error);
        setLoading(false);
      });

  };
  return (
    <div>
      <h1>Recipe App</h1>
      <IngredientInput onEnterPress={handleEnterPress} />
      {loading && <LoadingIcon/>}
      <RecipeLayout recipes={recipeList} />
    </div>
  );
}

export default App;