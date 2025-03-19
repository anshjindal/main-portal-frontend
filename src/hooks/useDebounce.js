import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour debounce une valeur.
 * @param {any} value - La valeur à debounce.
 * @param {number} delay - Temps en ms avant l'exécution.
 * @returns {any} - La valeur mise à jour après le délai.
 */
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}