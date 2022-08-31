import React from "react";
import './styles.css';
import ItemCount from "../../components/ItemCount";


const ItemListContainer = ({greeting, marca}) => {
    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad ${cantidad} al carrito`);
    }
    return (
        <div className="contenedor_saludo">
            <h1 className="saludo">{greeting}<span className="marca">{marca}</span></h1>
            <ItemCount initial={1} stock={10} onAdd = {agregarAlCarrito}/>
        </div>
    )
}

export default ItemListContainer;