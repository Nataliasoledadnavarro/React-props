import "../styles/Main.css";
import Card from "./Card";

const Main = () => {
  return (
    <main className="main">
      <h1>Bienvenidas a React</h1>
      <div className="contenedor-tarjetas">
        <Card nombre="rita" 
        imagen="http://www.placekitten.com/300"  numero= {5} array={[]}
        />
        <Card nombre="trufa"
        imagen="http://www.placekitten.com/300"
        />
        <Card nombre="misha"
        imagen="http://www.placekitten.com/300"
        />
      </div>
    </main>
  );
};

export default Main;
