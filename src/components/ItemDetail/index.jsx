import React from 'react'
import ItemCountContainer from '../../containers/ItemCountFinishContainer';
import './styles.css';
const ItemDetail = ({product}) => {
  return (

    <>
    
    <div className='contenedor_detail'>
        <div className='contenedor_titulo'>
        <h1 className='titulo_producto'>{product.name}</h1>
        <h3 className='precio_producto' >{product.price}€</h3>  
        <p className='descripcion_producto'>{product.description}</p>
        <div className='contador_producto'>
            <ItemCountContainer/>        
        </div>   
        </div>

        <div className='contenedor_datos'>
        <img className = "imagen_producto" src={product.image} alt="" />
        </div>
    </div>
    </>
  )
}

export default ItemDetail;