async function getGuitarras() {
  console.log({ data: `${process.env.API_URL}/guitarras?populate=imagen` });
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );

  console.log({ respuesta });
  const resultado = await respuesta.json();
  return resultado;
}

const getGuitarra = async (url) => {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}populate=imagen`
  );
  return respuesta.json();
};

export default { getGuitarras, getGuitarra };
