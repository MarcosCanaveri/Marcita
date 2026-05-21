import ItemList from "../ItemList/ItemList";

function ItemListContainer({ Mensaje}) {
    
    const productos = [
        { id: 1, nombre: "Anillo de plata", precio: 50, stock: 10 },
        { id: 2, nombre: "Collar de oro", precio: 150, stock: 5 },
        { id: 3, nombre: "Pulsera de acero", precio: 30, stock: 20 },
    ];

    return (
        <div>
            <h2>{Mensaje}</h2>
            <div>
                <ItemList productos={productos} />
            </div>
        </div>
    );
}

export default ItemListContainer;