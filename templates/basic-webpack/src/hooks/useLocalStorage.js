/**
 * hooks/useLocalStorage.js
 */
import { useState } from 'react';
import { fromJS } from 'immutable';

function useLocalStorage(key, initialValue = null, immutable = false) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      let value = initialValue;
      if (item) {
        value = JSON.parse(item);
        // console.log(value);
        if (immutable) {
          value = fromJS(value);
        }
      }
      return value;
    } catch (error) {
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      const stateValue = immutable ? fromJS(valueToStore) : valueToStore;
      setStoredValue(stateValue);
    } catch (error) {
      // A more advanced implementation would handle the error case
      // console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
