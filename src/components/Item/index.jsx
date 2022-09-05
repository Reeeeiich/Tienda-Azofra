import React from 'react';
import './styles.css';

const Item = ({product}) => {
  return (
    <div className="card">
        <img className="card-img-top" src={product.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item price_item">{product.precio} €</li>
                    <li className="list-group-item">{product.description}</li>
                </ul>
                <a href="#" className="btn btn-primary">Añadir al carrito</a>
            </div>
        </div> 
  )
}

export default Item