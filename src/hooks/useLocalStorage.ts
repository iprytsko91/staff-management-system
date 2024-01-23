import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const json = localStorage.getItem(key);

    if (json === null) {
      return initialValue;
    }

    return JSON.parse(json)
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue];
};
