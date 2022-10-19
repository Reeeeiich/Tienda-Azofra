import React from "react";
import ItemList from '../../components/ItemList';
import { useState } from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    console.log(db);
    const [productos, setProducts]= useState([]);

    const {categoryId} = useParams();

    useEffect(()=>{          
        ( async ()=> {
            try {
                //Se genera la query primero
                const q = query(collection(db, "products"));

                //Se llama a firebase 
                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                //Se obtiene el "snapshot" con los datos crudos.
                querySnapshot.forEach((doc) => {

                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                productosFirebase.push({id: doc.id, ...doc.data()});
            });
            setProducts(productosFirebase);


                if(categoryId) {
                    //Se genera la query primero
                    const q = categoryId ?
                    query(collection(db, "products"), where("category", "==", categoryId))
                    : 
                    query(collection(db, "products"));

                    //Se llama a firebase 
                    const querySnapshot = await getDocs(q);
                    const productosFirebase = [];
                    //Se obtiene el "snapshot" con los datos crudos.
                    querySnapshot.forEach((doc) => {

                // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    productosFirebase.push({id: doc.id, ...doc.data()});
            });
            setProducts(productosFirebase);

                
                } else{
                    //Se llama a firebase 
                    const querySnapshot = await getDocs(q);
                    const productosFirebase = [];
                    //Se obtiene el "snapshot" con los datos crudos.
                    querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    productosFirebase.push({id: doc.id, ...doc.data()});
                    }); 
                    setProducts(productosFirebase);
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