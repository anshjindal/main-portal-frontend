import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour debounce une valeur.
 * @param value La valeur à debounce.
 * @param delay Temps en ms avant l'exécution.
 * @returns La valeur mise à jour après le délai.
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

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
