import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";

const ProductosBD = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const prodDB = collection(db, "productos");
        getDocs(prodDB).then((res) => {
            setProductos(res.docs.map((doc) => {return { ...doc.data(), id: doc.id }}));
        });
    }, []);

    return (
        <div>
        <h2>Productos BD</h2>
        <div>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    <p>Stock: {producto.stock}</p>
                                    </div>
            ))}
        </div>
        </div>
    )
}

export default ProductosBD;