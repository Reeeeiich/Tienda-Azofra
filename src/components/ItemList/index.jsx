import React from 'react'
import Item from '../Item';
import '../Item/styles.css';
import { CircularProgress } from '@mui/material';


const ItemList = ({products}) => {
  return (
    <div className='contenedor_lista'>
      {products.length ? products.map(product => {
        
        return <Item key ={product.id} product= {product}/>
      })
      : 
      <CircularProgress color="secondary" />
      }
    </div>
  )
}

export default ItemList