import Layout from "./componentes/Layout/Layout";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Productos from "./componentes/Productos/Productos";
import FormularioProducto from "./componentes/FormularioProducto/FormularioProducto";
import FormularioContainer from "./componentes/FormularioProducto/FormularioContainer";
import { Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio/inicio";
import ProductoDetalle from "./componentes/ProductoDetalle/ProductoDetalle";
import Cart from "./componentes/Cart/Cart";
import ProductosBD from "./componentes/ProductosBD/ProductosBD";


function App() {

  return (

    <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos Mensaje="Nuestros productos más populares" />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/producto nuevo" element={<FormularioContainer />} />
        <Route path="/contacto" element={<ItemListContainer Mensaje="Bienvenidos a Marcita Joyas" />} />
        <Route path="/sobre-nosotros" element={<h2>Conoce a nuestro equipo</h2>} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/productosBD" element={<ProductosBD />} />

      </Route>

    </Routes>
  );
}

export default App
