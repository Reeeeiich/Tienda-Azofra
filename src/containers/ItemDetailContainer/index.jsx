import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

function ItemDetailContainer() {
    const [productDetail, setProductDetail] = useState({});
    const {productId} = useParams();

    useEffect (()=>{
        
    const getProducts = async () => {
        try {
            const docRef = doc(db, "products", productId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProductDetail({id: docSnap.id, ...docSnap.data()});
                
        } 
            else {
                //doc.data() will be undefined in this case
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '¡Algo fue mal, item no encontrado',
                    footer: '<a href="/">Pulse aquí y vuelva a inicio</a>',
                  })
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    getProducts();
}, [productId])

  return <ItemDetail product = {productDetail}/>;

}


export default ItemDetailContainer;