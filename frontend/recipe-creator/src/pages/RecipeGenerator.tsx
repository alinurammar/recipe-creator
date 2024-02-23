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
    const [generateClicked, setGenerateClicked] = useState(false);
    const [includePantry, setIncludePantry] = useState(true); // State for including pantry items
    const [strictlyIngredients, setStrictlyIngredients] = useState(false); // State for strictly using provided ingredients

    // Setup axios configs
    const apiUrl = process.env.REACT_APP_API_URL;
    axios.defaults.baseURL = apiUrl;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    const handleGenerateClick = () => {
        // Check if ingredient list is empty
        setGenerateClicked(true);
        if (ingredientList.trim() === '') {
            return;
        }

        const checkedBoxes: string = Object.values(selectedFilters).join(',');

        if (typeof apiUrl !== 'string') {
            console.error('Error fetching backend server');
            return;
        }
        setLoading(true);
        axios.post('/ingredients',
            {
                ingredients: ingredientList,
                includePantry: includePantry,
                strictlyIngredients: strictlyIngredients,
                filters: checkedBoxes,
                selectedFilters: selectedFilters
            }
        )
            .then(response => {
                console.log(response.data)
                let responseDataString = response.data['message'];
                try {
                    let responseData: any[] = JSON.parse(responseDataString);
                    if (Array.isArray(responseData)) {
                        setRecipeList([...responseData]);
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
        if (ingredients.trim() !== '') {
            setGenerateClicked(false);
        }
    };

    const handleIncludePantryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncludePantry(event.target.checked);
    };

    const handleStrictlyIngredientsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStrictlyIngredients(event.target.checked);
    };

    return (
        <div>
            <div className='container'>
                <div className='title'>Recipe Generator</div>
                <div className='body'>Select filter(s) and Input Ingredients</div>
                <div className='filter-container'>
                    <FilterLayout name='Meal Style' filterType='radio' filters={['Breakfast', 'Lunch', 'Dinner', 'Dessert']} onFilterChange={handleFilterChange} />
                    <FilterLayout name='Dietary Restrictions' filterType='checkbox' filters={['Halal', 'Keto', 'Gluten-free', 'Dairy-free', 'Vegan']} onFilterChange={handleFilterChange} />
                    <FilterLayout name='Meal Speed' filterType='radio' filters={['< 30 mins', '1 hr', '2hr']} onFilterChange={handleFilterChange} />
                </div>
                <div className="checkbox-container">
                    <label>
                        <input type="checkbox" checked={includePantry} onChange={handleIncludePantryChange} />
                        Include default pantry items
                        <span className="tooltip">
                            <img src="https://static.thenounproject.com/png/1871193-200.png" alt="Tooltip" />
                            <span className="tooltiptext">By selecting this option, the search will include common pantry items such as flour, sugar, spices, eggs, milk, etc.</span>
                        </span>
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" checked={strictlyIngredients} onChange={handleStrictlyIngredientsChange} />
                        Strictly use provided ingredients
                    </label>
                </div>
                {(generateClicked && ingredientList.trim() === '') &&
                    <div className="error-message">Please enter at least one ingredient.</div>
                }
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