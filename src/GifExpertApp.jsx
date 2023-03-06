import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitfExpertApp = () => {
  const [categories, setcategories] = useState(["one punch"]);

  const onAddCategory = (valor = "") => {
    if (categories.includes(valor)) return;
    // forma de hacerlo
    setcategories([valor, ...categories]);
    // forma de hacerlo
    // setcategories(cat => ['nuevo', ...cat]);
  };

  return (
    <>
      <h1>Gif App</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
