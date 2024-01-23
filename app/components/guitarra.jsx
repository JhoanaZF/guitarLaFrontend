import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, precio, url, nombre } = guitarra;

  const texto = Array.isArray(descripcion)
    ? descripcion.map((desc) => desc.children.map((descrip) => descrip.text))
    : descripcion;
  return (
    <div className='guitarra'>
      <img
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen guitarra ${nombre}`}
      />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p>{texto}</p>
        <p>${precio}</p>
        <Link
          className='enlace'
          to={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
