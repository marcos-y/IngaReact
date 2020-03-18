import React from 'react';
import Navdropdown from './Navdropdown';
import Logoybuscar from './Logoybuscar';
import './Header.css'
import './Logoybuscar.css'

const Header = () =>{

    return (
        <>
        <div className="Logoybuscar">
            <Logoybuscar></Logoybuscar>
        </div>
        
        <div className="Header">
            <Navdropdown/>
        </div>
        </>
    );
}

export default Header;