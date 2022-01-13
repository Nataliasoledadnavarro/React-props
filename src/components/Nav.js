import "../styles/Nav.css";

const Nav = () => {
  //Los parametros de los componentes en React se llaman props
  //puede recibir uno solo y va a ser un objeto.
  return (
    <nav className="nav-bar">
      <ul>
        <li>Principal</li>
        <li>Contacto</li>
        <li>Recurso</li>
      </ul>
    </nav>
  );
};

export default Nav;
