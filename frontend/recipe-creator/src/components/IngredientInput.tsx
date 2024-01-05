import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import './IngredientInput.css';
interface IngredientInputProps {
  onInputChange: (value: string) => void;
  onEnterPress: () => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onInputChange, onEnterPress }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnterPress();
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

