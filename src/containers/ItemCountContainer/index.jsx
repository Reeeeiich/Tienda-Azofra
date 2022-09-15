import React from "react";
import ItemCount from "../../components/ItemCount";


function ItemCountContainer() {
    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad ${cantidad} al carrito`);
    }
    return (

        <div className="contenedor_saludo">
            <ItemCount initial={1} stock={10} onAdd = {agregarAlCarrito}/>
        </div>
    )
}

export default ItemCountContainer;