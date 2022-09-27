import React  from "react";
import ItemCount from "../../components/ItemCount";
import { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import "../../components/ItemCount/styles.css";
import {Shop} from "../../context/ShopProvider";

function ItemCountContainer({product}) {
    const [qty, setQty] = useState(0); 
    const navigate = useNavigate();

    const {addItem} =useContext(Shop);
  
    const addCart = (quantity) => {
      
      setQty(quantity);
      }

      const handleFinish = () => {
        const productToSave = {...product, quantity: qty}
        addItem(productToSave);
        navigate('/cart')

      }

      console.log(qty);
    return (
        <div className="contenedor_contador">
          { qty ? (
          <button className="finalizar_compra" onClick = {handleFinish}> Finalizar compra</button>
          ):
          (
          <ItemCount initial={1} stock={10} onAdd = {addCart}/>
          )}
        </div>
    );
};

export default ItemCountContainer;