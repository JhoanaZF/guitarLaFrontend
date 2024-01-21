export async function loader() {
  const respuesta = fetch(
    "http://localhost:1337/api/guitarras?populate=imagen"
  );
  const resultado = await respuesta.json();
  console.log(resultado);
  return {};
}

const Tienda = () => {
  return <div>tienda</div>;
};

export default Tienda;
