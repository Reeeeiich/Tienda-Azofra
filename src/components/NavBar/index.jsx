import React from 'react'
import CartWidget from '../CartWidget';
import './styles.css';
import { Link } from 'react-router-dom';

const NavBar= ()=> {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <p className="navbar-brand">Once upon a dream</p> 
            <img className="labial_icon" src="https://img.icons8.com/ios/50/000000/eyelash.png"/> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/category/inicio" className="nav-link" aria-current="page">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/ojos" className="nav-link">Ojos</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/piel" className="nav-link">Piel</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/labios" className="nav-link">Labios</Link>
                    </li>
                </ul>
                </div>
                <div className='cart_icon'>
                    <CartWidget/>
                </div>
            </div>
            
    </nav>
    </>
    )
}

export default NavBar;