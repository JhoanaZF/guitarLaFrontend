export async function loader() {
  const respuesta = fetch("");
  const resultado = await respuesta.json();
  console.log(resultado);
  return {};
}

const Tienda = () => {
  return <div>PRUEBA</div>;
};

export default Tienda;
