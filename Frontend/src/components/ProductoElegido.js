import React from 'react';
import Carousel2 from './Carousel2';
import './ProductoElegido.css';
import InfoProductoElegido from './InfoProductoElegido';
import {
    useParams,
  } from "react-router-dom";

const ProductoElegido = (props) => {

    const {nombre,precio} = useParams();

    return (
        <>
            <div className="ProductoElegido">                  
                 
                 <Carousel2></Carousel2>
                 
                 <InfoProductoElegido name={nombre} precio={precio} productos={props.productos} onAddProd={props.onAddProd}></InfoProductoElegido>

            </div>
        </>
    )
}

export default ProductoElegido;