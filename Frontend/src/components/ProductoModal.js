import React from 'react';
import './ProductoModal.css';
import imagen from './Mochila.png';

const ProductoModal = () =>{

    return(
        <>
            <div className="ProductoModal">
                <img src={imagen} className="imagen"></img>
                
                <div className="info">
                    <h6>MOCHILA POLINA</h6>
                    <h6>2000</h6>
                
                </div>
                
                <div className="borrar">
                    <h6>2000</h6>
                    <img src="https://cdn.icon-icons.com/icons2/1919/PNG/512/biggarbagebin_121980.png" className="icon"></img>
                </div>

            </div>

        </>
    )
}

export default ProductoModal;