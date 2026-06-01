import { useState } from "react";

function Item({ nombre, precio, stock }) {

    const [esFavorito, setEsFavorito] = useState(false);

    const CompraClick = () => {
        alert(`Has agregado ${nombre} al carrito`);
    };

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    };

    const [ cantidad, setCantidad ] = useState(0);

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
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock}</p>
            <button onClick={decrementar}>-</button>
            <p>{cantidad}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={CompraClick}> Agregar al carrito</button>
            <span
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={marcarComoFavorito}
                >
                
                {esFavorito ? "⭐" : "☆"}
                
            </span>
        </div>
    );
}

export default Item;


