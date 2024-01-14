// IngredientInput.tsx
import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import './IngredientInput.css';
import { CheckboxManager } from './CheckboxManager';

// Instantiate CheckboxManager outside the component
const checkboxManager = new CheckboxManager();

interface IngredientInputProps {
  onEnterPress: (value: string, checkedCheckboxes: string) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onEnterPress }) => {
  const [inputValue, setInputValue] = useState('');
  const [checkedCheckboxes, setCheckedCheckboxes] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const checkedCheckboxesString = checkedCheckboxes.join(', ');
      onEnterPress(inputValue, checkedCheckboxesString);
    }
  };

  useEffect(() => {
    const container = checkboxManager.checkboxContainer;
    const targetDiv = document.getElementById('checkboxContainerDiv');

    if (targetDiv) {
      targetDiv.appendChild(container);
    } else {
      console.error("Target div not found");
    }

    const handleCheckboxChange = (checkedCheckboxes: string[]) => {
      setCheckedCheckboxes(checkedCheckboxes);
    };

    checkboxManager.setCheckboxChangeCallback(handleCheckboxChange);

    return () => {
      // Cleanup the callback when the component unmounts
      checkboxManager.setCheckboxChangeCallback(() => {});
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <label>Select filter(s) and/or enter ingredients:</label>
      <div id="checkboxContainerDiv"></div>
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
