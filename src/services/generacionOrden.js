const generarOrden = (nombre, apellido, usuario, email, direccion, numero, cart, total) => {
    return{
        buyer: {
            Nombre: nombre, 
            Apellido: apellido,
            Usuario: usuario,
            Email: email,
            Dirección: direccion,
            Numero: numero
        },
        items: cart,
        total: total, 
        createdAt : new Date().toLocaleString()
    }
}

export default generarOrden;