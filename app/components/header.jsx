import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
const Header = () => {
  return (
    <header className='header'>
      <div className='contendor barra'>
        <Link to='/'>
          <img
            src={logo}
            alt='Imagen Logo'
            className='logo'
          />
        </Link>
        <nav className='navegacion'>
          <Link to='/index'>Inicio</Link>
          <Link to='/nosotros'>Nosotros</Link>
          <Link to='/tienda'>Tienda</Link>
          <Link to='/blog'>Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
