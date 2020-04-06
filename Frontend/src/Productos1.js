import React from 'react';
import Producto from './components/Producto';
import './components/Producto.css';
import './Productos1.css';
import img from './components/Mochila.png';

const Productos1 = () => {

    return (
        <>
        <div className="Productos1">
            <Producto nombre="cartera" descuento="$2000 40% OFF" precio="$3000" cuotas="Hasta 12 cuotas" imagen={img}></Producto>
            <Producto nombre="cartera" descripcion="cartera negra" imagen={img}></Producto>
            <Producto nombre="cartera" descripcion="cartera negra" imagen={img}></Producto>
        </div>
        </>
    )
}

export default Productos1;