import { useState } from "react";

function Item({ nombre, precio, stock }) {

    const [esFavorito, setEsFavorito] = useState(false);

    const CompraClick = () => {
        alert(`Has agregado ${nombre} al carrito`);
    };

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    };

    return (
        <div>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock}</p>
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

