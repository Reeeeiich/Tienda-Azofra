import React from "react";
import './styles.css';
import ItemCount from "../../components/ItemCount";
import {products} from '../../data/products';
import ItemList from '../../components/ItemList';
import Item from "../../components/Item";
import { useState } from 'react';
import { useEffect } from "react";
const ItemListContainer = ({greeting, marca}) => {
    const [productos, setProducts]= useState([]);
    useEffect(()=>{  
        ( async ()=> {
            const obtenerProductos = new Promise ((accept, reject) => {
                setTimeout(()=>  {
                    accept(products)
                }, 3000);
            })
            try {
                const response = await obtenerProductos;
                setProducts(response)
            } catch (error) {
                console.log(error);
            }
        })()
}, [productos])

    console.log(productos);
    
    return (
        <div>
            <ItemList products = {productos}/>
        </div>
    )
    /*
    const agregarAlCarrito = (cantidad) => {
        console.log(`Se agregó la cantidad ${cantidad} al carrito`);
    }
    return (
        <div className="contenedor_saludo">
            <h1 className="saludo">{greeting}<span className="marca">{marca}</span></h1>
            <ItemCount initial={1} stock={10} onAdd = {agregarAlCarrito}/>
        </div>
    )
    */
}

export default ItemListContainer;