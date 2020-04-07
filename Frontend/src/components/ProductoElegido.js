import React from 'react';
import Carousel2 from './Carousel2';
import './ProductoElegido.css';
import InfoProductoElegido from './InfoProductoElegido';



const ProductoElegido = () => {

    return (
        <>
            <div className="ProductoElegido">                  
                 
                 <Carousel2></Carousel2>
                 
                 <InfoProductoElegido></InfoProductoElegido>
            
            </div>
        </>
    )
}

export default ProductoElegido;