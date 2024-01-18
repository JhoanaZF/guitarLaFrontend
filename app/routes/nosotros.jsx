import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros",
      description: "Venta de guitarras, blog de música",
    },
  ];
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preload", href: imagen, as: "image" },
  ];
}
const Nosotros = () => {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img
          src={imagen}
          alt='Imagen sobre nosotros'
        />
        <div>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Quisque at interdum arcu, eget egestas leo.
            Maecenas elementum nisi sem, id rhoncus nisl pharetra vitae. Sed
            tempor felis et neque euismod egestas. Sed elementum lectus dolor,
            ut dignissim ante tincidunt vitae. Phasellus tristique mauris
            sagittis ex suscipit, malesuada varius nisi sollicitudin. Vestibulum
            quis elementum mauris. Proin at metus in dolor placerat scelerisque
            non id nunc. Nam accumsan ipsum vitae augue dapibus, vel lacinia
            nunc maximus. Morbi ac tristique sem, quis volutpat risus.
            Vestibulum ex turpis, fringilla eget maximus pulvinar, consectetur
            eu elit. Nunc ullamcorper dolor porta ultrices pellentesque. Etiam
            lobortis eu nibh volutpat faucibus. Cras id sagittis turpis.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Quisque at interdum arcu, eget egestas leo.
            Maecenas elementum nisi sem, id rhoncus nisl pharetra vitae. Sed
            tempor felis et neque euismod egestas. Sed elementum lectus dolor,
            ut dignissim ante tincidunt vitae. Phasellus tristique mauris
            sagittis ex suscipit, malesuada varius nisi sollicitudin. Vestibulum
            quis elementum mauris. Proin at metus in dolor placerat scelerisque
            non id nunc. Nam accumsan ipsum vitae augue dapibus, vel lacinia
            nunc maximus. Morbi ac tristique sem, quis volutpat risus.
            Vestibulum ex turpis, fringilla eget maximus pulvinar, consectetur
            eu elit. Nunc ullamcorper dolor porta ultrices pellentesque. Etiam
            lobortis eu nibh volutpat faucibus. Cras id sagittis turpis.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
