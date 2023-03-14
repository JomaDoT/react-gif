import  PropTypes from 'prop-types';


export const GifItems = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

//propertypes se puede especificar que esperamos y ponerlo como requerido

GifItems.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
}
  //defaults props tambien se pueden agregar nuevos
      // App.defaultProps= {
      //     title:'no tiene nombre',
      //     subtitle:''
      // }