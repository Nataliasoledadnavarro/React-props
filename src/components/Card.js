import "../styles/Card.css";

const Card = (props) => {
  return (
    <article className="card">
      <p>{props.nombre}</p>
      <div className="contenedor-img">
        <img src= {props.imagen}/>
      </div>
    </article>
  );
};

export default Card;
