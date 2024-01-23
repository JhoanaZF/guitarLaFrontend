import { useLoaderData } from "@remix-run/react";
import getGuitarras from "~/models/guitarras.server.js";
import Guitarra from "~/components/guitarra";

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras;
}

const Tienda = () => {
  const guitarras = useLoaderData();
  return (
    <main className='conenedor'>
      <h2 className='heading'>Nuestra Colección</h2>
      {guitarras.length && (
        <div className='guitarras-grid'>
          {guitarras.map((guitarra) => (
            <Guitarra
              key={guitarra}
              guitarra={guitarra}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Tienda;
