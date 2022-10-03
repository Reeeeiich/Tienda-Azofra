import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import generarOrden from '../../services/generacionOrden';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';

const Cart =() =>  {

  const {cart, removeItem, clearCart, calcularTotal} = useContext(Shop);
  console.log("CART", cart);


  const renderImage = (image) => {
    return(
      <img src={image.value} alt="cart-product" style={{height: '100px'}}></img>
    )
  }

  const renderRemoveButton = (item) => {
    const product = item.value
    return (
      <Button onClick={() => removeItem(product)} variant="contained" color="error"> Eliminar Item</Button>
    )
  }

  const handleBuy = async() => {
    const importeTotal = calcularTotal();
    const orden = generarOrden("Raquel", "raquelazofra14@gmail.com", 11111111, cart, importeTotal);
    const docRef = await addDoc(collection(db, "orders"), orden);

    cart.forEach(async(productInCart)=>{
      const productRef = doc(db, "products", productInCart.id);
      const productSnap = await getDoc(productRef);
      await updateDoc(productRef, {
      stock: productSnap.data().stock - productInCart.quantity,
   });
  });
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '¡Gracias por su compra!',
    text: 'Su código de compra es: ' + docRef.id,
    showConfirmButton: true,
  })
}


const columns = [
  { field : 'id', headerName: 'Id', width: 200},
  { field: 'image', headerName: 'Imagen', width: 250, renderCell: renderImage},
  { field: 'name', headerName: 'Producto', width: 130 },
  { field: 'price', headerName: 'Precio', width: 100 },
  { field: 'quantity', headerName: 'Cantidad', width: 100 },
  { field: 'remove', headerName: 'Eliminar', renderCell : renderRemoveButton, width: 220},
];

const filas = [];
cart.forEach(item => {
console.log("Item", item);
  filas.push({
    id: item.id,
    image: item.image,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    remove: item,
  })
});

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowHeight ={150}
      />
      <Button onClick = {clearCart} color= "error" variant="outlined">Limpiar carrito</Button>
      <Button onClick={handleBuy}>Confirmar compra</Button>
    </div>
  );
  }

export default Cart;