import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div>
                <h1>Carrito de Compras</h1>
                <p>El carrito está vacío.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.map(item => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: ${item.precio}</p>
                    <p>Subtotal: ${item.precio * item.cantidad}</p>
                </div>
            ))}
            <p>Total: ${getCartTotal()}</p>
            <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
    );
};

export default Cart;