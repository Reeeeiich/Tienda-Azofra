import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';

const Cart =() =>  {

  const {cart, removeItem, clearCart} = useContext(Shop);
  console.log("CART", cart);


  const renderImage = (image) => {
    return(
      <img src={image.value} alt="cart-product" style={{height: '100px'}}></img>
    )
  }

  const renderRemoveButton = (item) => {
    const product = item.value
    return (
      <button onClick={()=>removeItem(product)} variant = "contained" color ="error">Eliminar</button>
    )
  }
const columns = [
  { field : 'id', headerName: 'Id', width: 200},
  { field: 'image', headerName: 'Imagen', width: 250, renderCell: renderImage},
  { field: 'name', headerName: 'Producto', width: 130 },
  { field: 'price', headerName: 'Cantidad', width: 100 },
  {
    field: 'remove',
    headerName: 'Eliminar',
    renderCell : renderRemoveButton,
    width: 120,
  },
];

const filas = [];
cart.forEach(item => {
console.log("Item", item);
  filas.push({
    id: item.id,
    image: item.image,
    name: item.name,
    price: item.price,
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
      />
      <button onClick = {clearCart} color= "error" variant="outlined">Limpiar carrito</button>
    </div>
  );
  }

export default Cart;