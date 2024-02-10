// IngredientInput.tsx
import React, { ChangeEvent, useState, useEffect } from 'react';
import './IngredientInput.css';

interface IngredientInputProps {
  onIngredientChange: (value: string) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onIngredientChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    onIngredientChange(inputValue);
  }, [inputValue, onIngredientChange]);

  return (
    <div className='ingredient-container'>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="ingredient-input"
        placeholder="Enter Ingredients. E.g., Quinoa, Lettuce, Onion, Tomatoes, Chicken, Honey"
      />
    </div>
  );
};

export default IngredientInput;
