import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const valor = inputValue.trim();
    if (valor.trim().length <= 1) return;

    onAddCategory(valor);
    setinputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
