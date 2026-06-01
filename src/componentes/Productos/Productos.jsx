import React, { useState, useEffect } from 'react';

function Productos({Mensaje}) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('/data/productos.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar los productos");
                }
                return response.json();
            })
            .then((datos) => {
                setProductos(datos);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>{Mensaje}</h2>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: {producto.stock}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Productos;