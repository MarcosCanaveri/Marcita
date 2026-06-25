import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";

function ItemListContainer({ Mensaje, Destacados }) {
    
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error al cargar los productos');
                    
                }

                return res.json();
                
            })
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                setError(err.message);
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const productosAMostrar = Destacados ? productos.filter(producto => producto.destacado) : productos;

    return (
        <div>
            <h2>{Mensaje}</h2>
            <div>
                <ItemList productos={productosAMostrar} />
            </div>
        </div>
    );
}

export default ItemListContainer;