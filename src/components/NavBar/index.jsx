import React from 'react'
import CartWidget from '../CartWidget';
import './styles.css';
import { Link } from 'react-router-dom';
import {Button} from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import AuthContainer from '../../containers/AuthContainer';

const NavBar= ()=> {
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    const handleLogin = () => {
        setLoginModal(true);
    };

    const handleSignup = ()=> {
        setSignupModal(true);
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <p className="navbar-brand">Once upon a dream</p> 
            <img className="labial_icon" alt ="imagen_pestaña" src="https://img.icons8.com/ios/50/000000/eyelash.png"/> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/labios" className="nav-link">Labiales</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/piel" className="nav-link">Skincare</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/ojos" className="nav-link">Ojos</Link>
                    </li>
                </ul>
                
                </div>
                <div className='cart_icon'>
                    <CartWidget/>
                </div>
                <div className='contenedor_botones'>
                    <Stack spacing = {2} direction="row">
                        <Button onClick={handleLogin} variant = "contained" color="secondary">Login</Button>
                        <Button onClick = {handleSignup} variant = "contained" color="secondary">Registrate</Button>
                    </Stack>
                    {(loginModal || signupModal) && (
                    <AuthContainer
                        handleClose={() => {
                            setLoginModal(false);
                            setSignupModal(false);
                        }}
                        login={loginModal}
                        signUp={signupModal}
                    />
                )}
                    </div>
                    
            </div>
            
    </nav>
    </>
    )
}

export default NavBar;