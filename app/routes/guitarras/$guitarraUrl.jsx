import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server.js";

export const loader = async ({ params }) => {
  const { guitarrasUrl } = params;
  const guitarra = await getGuitarra(guitarrasUrl);
  return guitarra;
};

const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  // console.log(guitarra.data[0].attributes.nombre);
  return <main className='contenedor guitarra'>$guitarrasUrl</main>;
};

export default Guitarra;
