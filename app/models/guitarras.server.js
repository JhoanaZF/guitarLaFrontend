async function getGuitarras() {
  console.log({ data: `${process.env.API_URL}/guitarras?populate=imagen` });
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );

  console.log({ respuesta });
  const resultado = await respuesta.json();
  return resultado;
}

export default getGuitarras;
