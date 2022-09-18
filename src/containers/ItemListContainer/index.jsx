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
                if(categoryId) {
                const response = await fetch(`https://dummyjson.com/products/category/${categoryId}`);
                const productos = await response.json();
                setProducts(productos.products);
                } else{
                const response = await fetch("https://dummyjson.com/products");
                const productos = await response.json();
                setProducts(productos.products);
                }
                
            } catch (error) {
                console.log(error)
            }
        })()
}, [categoryId])

    console.log(productos);
    
    return (
        <>
            <ItemList products = {productos}/>
        </>
    )
}

export default ItemListContainer;