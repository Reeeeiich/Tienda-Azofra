import React, {useState, useEffect} from 'react'
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState(initial);
    
    const handleAdd =() => {
       if(count < stock) {
        setCount(count+1);
       }else{
        alert("No hay stock suficiente")
       }
    };
    const handleDecrement = ()=> {
        if (count > initial ){
            setCount(count-1);
        }
    }
//Setea el contador en uno. 
    const addCart = () => {
        onAdd(count);
        setCount(initial);
        
    }

useEffect(() => {
    //El array de dependencias vacío implica que el callback se ejecutará cuando se MONTA el componente por UNICA vez.
    console.log("Se montó el ItemCount");
}, []
);
// La función callback dentro del useEffect se ejecutará cuando se MONTE el componente, y cuando se ACTUALICE el valor del count
useEffect(()=>{
    console.log("Se actualiza el estado!");
}, [count]);

return(
    <div className='contenedor_contador'>
        <div className='clicks_container'>
            <button className='decrecer' onClick = {handleDecrement}>-</button>
            <h2 className='contador'>{count}</h2>
            <button className='aumento' onClick={handleAdd}>+</button>
        </div>
        <button className='add' onClick={addCart}>¡Lo quiero!</button>
        
    </div>
);
};

export default ItemCount;