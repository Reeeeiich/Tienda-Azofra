import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Cart =() =>  {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate (`/checkout`)
  }
  const {cart, removeItem, clearCart} = useContext(Shop);

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
      <Button onClick={handleNavigate}>Confirmar compra </Button>
    </div>
  );
  
  }

export default Cart;