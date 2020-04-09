import React from 'react';
import Carousel2 from './Carousel2';
import './ProductoElegido.css';
import InfoProductoElegido from './InfoProductoElegido';
import {
    useParams,
  } from "react-router-dom";

const ProductoElegido = () => {

    const {nombre} = useParams();

    return (
        <>
            <div className="ProductoElegido">                  
                 
                 <Carousel2></Carousel2>
                 
                 <InfoProductoElegido name={nombre} ></InfoProductoElegido>

            </div>
        </>
    )
}

export default ProductoElegido;