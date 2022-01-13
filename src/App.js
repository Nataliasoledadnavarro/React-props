import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="contenedor">
      <Nav />
      <Main />
      <Button mensaje="Cerrar" color="verde"/>
      <Button mensaje="Salir" color ="rojo"/>
      <Button mensaje="Enviar" color="azul" />
      <Footer />
    </div>
  )
}

export default App;
