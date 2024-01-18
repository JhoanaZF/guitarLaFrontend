import { Link, useLocation } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
const Header = () => {
  const location = useLocation();

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
          <Link
            to='/index'
            className={location.pathname === "/index" ? "active" : ""}>
            Inicio
          </Link>
          <Link
            to='/nosotros'
            className={location.pathname === "/nosotros" ? "active" : ""}>
            Nosotros
          </Link>
          <Link
            to='/tienda'
            className={location.pathname === "/tienda" ? "active" : ""}>
            Tienda
          </Link>
          <Link
            to='/blog'
            className={location.pathname === "/blog" ? "active" : ""}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
