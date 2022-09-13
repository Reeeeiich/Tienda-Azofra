import React from "react";
import ItemCount from "../../components/ItemCount";
import { useState } from 'react';
import { useEffect } from "react";

function ItemCountContainer({greeting}) {
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