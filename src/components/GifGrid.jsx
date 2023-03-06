import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItems } from "./GifGridItems";

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
          <GifGridItems key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
