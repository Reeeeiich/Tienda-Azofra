import React  from "react";
import ItemCount from "../../components/ItemCount";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../../components/ItemCount/styles.css";


function ItemCountContainer() {
    const [qty, setQty] = useState(0); 
    const navigate = useNavigate();

    const addCart = (quantity) => {
      setQty (quantity);
      }

      const handleFinish = () => {
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