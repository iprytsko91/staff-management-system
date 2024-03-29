import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue((initialValue));
  };

  const bind = {
    value: value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
  }

  return { value, reset, bind };
};
