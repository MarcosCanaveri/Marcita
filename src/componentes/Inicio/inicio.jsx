import ItemListContainer from "../ItemListContainer/ItemListContainer";

function inicio() {
    return (
        <div>
            <h1>Bienvenidos a Marcita Joyas</h1>
            <ItemListContainer Mensaje="Descubre nuestras joyas exclusivas" Destacados={true} />
        </div>
    );
}

export default inicio;