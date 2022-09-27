import React  from "react";
import ItemCount from "../../components/ItemCount";
import { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import "../../components/ItemCount/styles.css";
import {Shop} from "../../context/ShopProvider";

function ItemCountContainer({product}) {
  console.log("producto", product);
    const [qty, setQty] = useState(0); 
    const navigate = useNavigate();

    const {addItem} =useContext(Shop);
    console.log("añadir item", addItem)
    const addCart = (quantity) => {
      
      setQty(quantity);
      }

      const handleFinish = () => {
        const productToSave = {...product, quantity: qty}
        addItem(productToSave);
        console.log("Producto guardado", productToSave);
        console.log("añadir item 2", addItem);
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