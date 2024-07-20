import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Retrieve initial value from localStorage or use initialValue if not present
  const storedValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : initialValue;

  // State to hold the current value
  const [value, setValue] = useState(storedValue);

  // Update localStorage and state with new value
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Remove item from localStorage and reset state
  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(null); // Reset state to null or any initial value as needed
  };

  return [value, updateValue, removeValue];
};

export default useLocalStorage;
