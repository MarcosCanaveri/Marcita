import { useState, useEffect } from "react";

function Contar() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("El contador ha cambiado:", contador);
    }, [contador]);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    );
}

export default Contar;