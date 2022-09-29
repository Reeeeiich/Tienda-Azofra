import React from 'react'
import Item from '../Item';
import '../Item/styles.css';


const ItemList = ({products}) => {
  return (
    <div className='contenedor_lista'>
      {products.length ? products.map(product => {
        
        return <Item key ={product.id} product= {product}/>
      })
      : 
      <h2>Loading...</h2>
      }
    </div>
  )
}

export default ItemList