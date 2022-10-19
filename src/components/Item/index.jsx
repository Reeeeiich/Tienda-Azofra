import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';


const Item = ({product}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate (`/detail/${product.id}`)
    }
        return (
            <div className="card" onClick={handleNavigate}>
                <img className="card-img-top" src={product.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item price_item">{product.price} €</li>
                        <li className="list-group-item">{product.description}</li>
                    </ul>
                    <a href="#" className="btn btn-primary">Ver detalle</a>
                   
                </div>
            </div> 
           
            
        )
}

export default Item