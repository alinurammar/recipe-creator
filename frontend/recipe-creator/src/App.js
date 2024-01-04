import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [ingredients, setIngredients] = useState(null);

  
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
    return () => {};
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <div>
        <p>Goal is to make a call to our backend</p>
        <p>Ingredients: {ingredients && ingredients.ingredients}</p>
    </div>
  );
}


function getIngredients() {
  const apiUrl = 'http://127.0.0.1:5000/ingredients';
  let resp = fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('Error:', error);
    });
    return resp
}

export default App;
