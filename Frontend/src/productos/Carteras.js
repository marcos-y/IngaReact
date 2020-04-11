import React from 'react';
import Productos1 from '../Productos1';
import Title from '../components/Title';
import img from '../components/Mochila.png';
import ProductoElegido from '../components/ProductoElegido';

const Carteras = () => {

    return (
        <>
            <Title nombre="Carteras"></Title>
            <Productos1 nombre1="cartera1" nombre2="cartera2" nombre3="cartera3" 
                        precioDescuento1="$2000" precioDescuento2="$3000" precioDescuento3="$5000"
                        descuento1="40% OFF" descuento2="40% OFF" descuento3="40% OFF"
                        precio1="3000"  precio2="4000"  precio3="5000"
                        cuotas1="Hasta 12 cuotas" cuotas2="Hasta 12 cuotas" cuotas3="Hasta 12 cuotas"
                        imagen1={img} imagen2={img} imagen3={img}>
            </Productos1>

            <Productos1 nombre1="cartera1" nombre2="cartera2" nombre3="cartera3" 
                        precioDescuento1="$2000" precioDescuento2="$3000" precioDescuento3="$5000"
                        descuento1="40% OFF" descuento2="40% OFF" descuento3="40% OFF"
                        precio1="3000"  precio2="3000"  precio3="3000"
                        cuotas1="Hasta 12 cuotas" cuotas2="Hasta 12 cuotas" cuotas3="Hasta 12 cuotas"
                        imagen1={img} imagen2={img} imagen3={img}>></Productos1>
                        
            <Productos1 nombre1="cartera1" nombre2="cartera2" nombre3="cartera3" 
                        precioDescuento1="$2000" precioDescuento2="$3000" precioDescuento3="$5000"
                        descuento1="40% OFF" descuento2="40% OFF" descuento3="40% OFF"
                        precio1="$3000"  precio2="$3000"  precio3="$3000"
                        cuotas1="Hasta 12 cuotas" cuotas2="Hasta 12 cuotas" cuotas3="Hasta 12 cuotas"
                        imagen1={img} imagen2={img} imagen3={img}>></Productos1>
            <Productos1 nombre1="cartera1" nombre2="cartera2" nombre3="cartera3" 
                        precioDescuento1="$2000" precioDescuento2="$3000" precioDescuento3="$5000"
                        descuento1="40% OFF" descuento2="40% OFF" descuento3="40% OFF"
                        precio1="$3000"  precio2="$3000"  precio3="$3000"
                        cuotas1="Hasta 12 cuotas" cuotas2="Hasta 12 cuotas" cuotas3="Hasta 12 cuotas"
                        imagen1={img} imagen2={img} imagen3={img}>></Productos1>
            <Productos1 nombre1="cartera1" nombre2="cartera2" nombre3="cartera3" 
                        precioDescuento1="$2000" precioDescuento2="$3000" precioDescuento3="$5000"
                        descuento1="40% OFF" descuento2="40% OFF" descuento3="40% OFF"
                        precio1="$3000"  precio2="$3000"  precio3="$3000"
                        cuotas1="Hasta 12 cuotas" cuotas2="Hasta 12 cuotas" cuotas3="Hasta 12 cuotas"
                        imagen1={img} imagen2={img} imagen3={img}>></Productos1>

        </>
    )
}

export default Carteras;