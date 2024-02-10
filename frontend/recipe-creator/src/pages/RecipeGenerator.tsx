import { useState } from 'react';
import axios from 'axios';
import RecipeLayout from '../components/RecipeLayout'
import IngredientInput from '../components/IngredientInput';
import LoadingIcon from '../components/LoadingIcon';
import FilterLayout from '../components/FilterLayout';
import './RecipeGenerator.css';

function RecipeGenerator() {
    const [recipeList, setRecipeList] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<{ [name: string]: string[] }>({});
    const [ingredientList, setIngredientList] = useState<string>('');

    const handleGenerateClick = () => {
        const checkedBoxes: string[] = ([] as string[]).concat(...Object.values(selectedFilters));
        const apiUrl = process.env.REACT_APP_API_URL;
        if (typeof apiUrl !== 'string') {
            console.error('Error fetching backend server');
            return;
        }
        setLoading(true);
        axios.post(apiUrl, { ingredients: ingredientList, filters: checkedBoxes, selectedFilters: selectedFilters })
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

    const handleFilterChange = (name: string, checkedFilters: string[]) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [name]: checkedFilters
        }));
    };

    const handleIngredientListChange = (ingredients: string) => {
        setIngredientList(ingredients);
    };


    return (
        <div>
            <div className='container'>
                <h1>Recipe Generator</h1>
                <label>Select filter(s) and Input Ingredients</label>
                <div className='filter-container'>
                    <FilterLayout name='Meal Style' filterType='radio' filters={['Breakfast', 'Lunch', 'Dinner', 'Dessert']} onFilterChange={handleFilterChange} />
                    <FilterLayout name='Dietary Restrictions' filterType='checkbox' filters={['Halal', 'Keto', 'Dairy-free', 'Vegan']} onFilterChange={handleFilterChange} />
                    <FilterLayout name='Meal Speed' filterType='radio' filters={['< 30 mins', '1 hr', '2hr', 'None']} onFilterChange={handleFilterChange} />
                </div>
                <div className='bottom-component'>
                    <IngredientInput onIngredientChange={handleIngredientListChange} />
                    <button className='generate' onClick={handleGenerateClick}>Generate</button>
                </div>

                {loading && <LoadingIcon />}
                <RecipeLayout recipes={recipeList} />
            </div>
        </div>
    );
}

export default RecipeGenerator;