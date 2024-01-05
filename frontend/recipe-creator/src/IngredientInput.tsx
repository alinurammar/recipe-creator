import React, { ChangeEvent, useState } from 'react';

interface IngredientInputProps {
  onInputChange: (value: string) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <div>
      <label>Enter Ingredients:</label>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default IngredientInput;
