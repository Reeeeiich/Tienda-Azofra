import React from "react";
import ItemList from '../../components/ItemList';
import { useState } from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [productos, setProducts]= useState([]);

    const {categoryId} = useParams();

    console.log(categoryId);
    useEffect(()=>{          
        ( async ()=> {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const productos = await response.json();
                setProducts(productos);
            } catch (error) {
                console.log(error)
            }
        })()
}, [])

    console.log(productos);
    
    return (
        <div>
            <ItemList products = {productos}/>
        </div>
    )
}

export default ItemListContainer;