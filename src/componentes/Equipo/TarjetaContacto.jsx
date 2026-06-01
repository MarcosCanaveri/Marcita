function TarjetaContacto({ nombre, email, puesto, foto }) {
    return (
        <div>
            <img src={foto} alt={nombre} />
            <h3>{nombre}</h3>
            <p>{email}</p>
            <p>{puesto}</p>
        
            </div>
    );
}

export default TarjetaContacto;
