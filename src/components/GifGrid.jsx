import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItems } from "./GifItems";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2> Cargando....</h2>}
      <div className="card-grid">
        {images.map((img) => (
          //el key se necesita para identificar cada component
          //{...img}  hace la desestructuracion de todas las propiedades que contiene el img par mandarlo al componente
          <GifItems key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes ={
  category: PropTypes.string.isRequired
}