import React from 'react';
import Producto from './components/Producto';
import './components/Producto.css';
import './Productos1.css';
import img from './components/Mochila.png';

const Productos1 = (props) => {

    return (
        <>
        <div className="Productos1">
            <Producto nombre={props.nombre1} precioDescuento={props.precioDescuento1} descuento={props.descuento1} precio={props.precio1} cuotas={props.cuotas1} imagen={props.imagen1}></Producto>
            <Producto nombre={props.nombre2} precioDescuento={props.precioDescuento2} descuento={props.descuento2}  precio={props.precio2}  cuotas={props.cuotas2}  imagen={props.imagen2}></Producto>
            <Producto nombre={props.nombre3} precioDescuento={props.precioDescuento3} descuento={props.descuento3}  precio={props.precio3}  cuotas={props.cuotas3}  imagen={props.imagen3}></Producto>
        </div>
        </>
    )
}

export default Productos1;