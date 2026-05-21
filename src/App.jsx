import { Layout } from "./componentes/Layout/Layout.jsx";
import TarjetaProducto from "./componentes/TarjetaProductos/TarjetaProducto.jsx";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx";
import { Contador } from "./componentes/Contador/Contador.jsx";
import { Contar } from "./componentes/Contar/Contar.jsx";
import { Productos } from "./componentes/Productos/Productos.jsx";

function App() {

  return (
    <>
      <Layout>
        <h2>Productos destacados</h2>
        < Contar />
        < Contador />
        < Productos />
        <ItemListContainer Mensaje="Bienvenido a nuestra tienda de joyas" />
        <TarjetaProducto
        imagen="Producto1.jpg"
        nombre="Producto 1"
        precio={19.99}
        />

        <TarjetaProducto
        imagen="Producto2.jpg"
        nombre="Producto 2"
        precio={29.99}
        />

      </Layout>
    </>
  )
}

export default App
