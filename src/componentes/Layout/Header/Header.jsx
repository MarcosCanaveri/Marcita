import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

function Header() {

    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
    return (
        <header>
            <h1>Marcita Joyas</h1>

        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/producto nuevo">Producto Nuevo</Link></li>
                <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/carrito">Carrito {totalItems > 0 && <span>{totalItems}</span>} </Link></li>
                <li><Link to="/productosBD">Productos BD</Link></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;