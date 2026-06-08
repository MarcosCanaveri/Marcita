import { useState } from "react";

function TarjetaProducto({ imagen, nombre, precio }) {

    const [esFavorito, setEsFavorito] = useState(false);

    const compraClick = () => {
        alert(`Has agregado ${nombre} al carrito`);
    };

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    };

    const [cantidad, setCantidad] = useState(0);

    const incrementar = () => {
        if (cantidad < stock) {
        setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div>
            <img src={imagen} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <button onClick={decrementar}>-</button>
            <p>{cantidad}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={compraClick}> Agregar al carrito</button>
            <span
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={marcarComoFavorito}
                >
                {esFavorito ? "⭐" : "☆"}
            </span>
        </div>
    );
}

export default TarjetaProducto;