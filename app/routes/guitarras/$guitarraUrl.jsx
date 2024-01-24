import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server.js";

export const loader = async ({ params }) => {
  const { guitarrasUrl } = params;
  const guitarra = await getGuitarra(guitarrasUrl);
  return guitarra;
};

const Guitarra = () => {
  const guitarra = useLoaderData();
  console.log(guitarra.data[0].attributes.nombre);
  return <div>$guitarrasUrl</div>;
};

export default Guitarra;
