import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { Shop } from "../../context/ShopProvider";
import { useContext } from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);

  const addCart = (quantity) => {
      setQty(quantity);
  };

  const handleFinish = () => {
      const productToSave = {...product, quantity: qty}
      addItem(productToSave)
      navigate("/cart");
  };

  console.log(qty);

  return (

    <>
    
    <div className='contenedor_detail'>
        <div className='contenedor_titulo'>
          <h1 className='titulo_producto'>{product.name}</h1>
          <h3 className='precio_producto' >{product.price}€</h3>  
          <p className='descripcion_producto'>{product.description}</p>
          <div className='contador_producto'>
            {qty ? (
                    
                    <div className='contenedor_finalizar'><button className='finalizar_compra' onClick={handleFinish}>Finalizar compra</button></div>
                ) : (
                    <ItemCount stock={10} initial={1} onAdd={addCart} />
                )}
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