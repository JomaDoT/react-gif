import { useState } from "react";
import PropTypes from 'prop-types'
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
    //aria-label se utiliza para el testting
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input
        type="text"
        placeholder="buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}