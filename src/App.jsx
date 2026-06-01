import Layout from "./componentes/Layout/Layout";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Productos from "./componentes/Productos/Productos";



function App() {

  return (
    <Layout>
      <h2>Productos destacados</h2>

      <Productos Mensaje="Nuestros productos más populares" />

      
      
      <ItemListContainer Mensaje="Bienvenidos a Marcita Joyas" />

      <h2>Conoce a nuestro equipo</h2>

      


    </Layout>
  

  );
}

export default App
