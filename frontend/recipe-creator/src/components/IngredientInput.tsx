import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import './IngredientInput.css';
interface IngredientInputProps {
  onEnterPress: (value : string) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onEnterPress }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnterPress(inputValue);
    }
  };

  return (
    <div>
      <label>Enter Ingredients:</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="ingredient-input"
        placeholder="Enter Ingredients. E.g., Tomatoes, Onions, Salt"
      />
    </div>
  );
};


export default IngredientInput;

