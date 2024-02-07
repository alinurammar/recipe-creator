import { useState } from 'react';
import axios from 'axios';
import RecipeLayout from '../components/RecipeLayout'
import IngredientInput from '../components/IngredientInput';
import LoadingIcon from '../components/LoadingIcon';
import './RecipeGenerator.css';

function RecipeGenerator() {
    const [recipeList, setRecipeList] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    const handleEnterPress = (ingredientList: string, checkedCheckboxes: string) => {
        const apiUrl = process.env.REACT_APP_API_URL;
        if (typeof apiUrl !== 'string') {
            console.error('Error fetching backend server:');
            return;
        }
        setLoading(true);
        axios.post(apiUrl, { ingredients: ingredientList, filters: checkedCheckboxes })
            .then(response => {
                console.log(response.data)
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
            <div>
                <h1>Recipe App</h1>
                <IngredientInput onEnterPress={handleEnterPress} />
                {loading && <LoadingIcon />}
                <RecipeLayout recipes={recipeList} />
            </div>
        </div>
    );
}

export default RecipeGenerator;