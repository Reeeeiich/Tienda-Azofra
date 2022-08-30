import React from "react";
import './styles.css';

const ItemListContainer = ({greeting, marca}) => {
    return (
        <div className="contenedor_saludo">
            <h1 className="saludo">{greeting}<span className="marca">{marca}</span></h1>
        </div>
    )
}

export default ItemListContainer;