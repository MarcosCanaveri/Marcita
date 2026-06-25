import { useState, useContext, createContext } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Item({ id, nombre, precio, imagen, stock }) {

    const [esFavorito, setEsFavorito] = useState(false);

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    };

    const producto = { id, nombre, precio, stock, imagen, };

    const [ cantidad, setCantidad ] = useState(0);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (cantidad > 0) {
            addToCart(producto, cantidad);
        }
    };

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
            <button onClick={handleAddToCart}> Agregar al carrito</button>
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


