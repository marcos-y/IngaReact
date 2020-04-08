import React from 'react';
import Card from 'react-bootstrap/Card';
import './Producto.css';
import ProductoElegido from './ProductoElegido';
import {
    Link,
  } from "react-router-dom";

const Producto = (props) => {

    return (
        <>

        <Link to="/ProductoElegido" className="link">
            <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        <div className="tachado">
                        {props.precioDescuento}
                        </div>
                        {props.descuento}
                        <br></br>
                        <br></br>
                        <h6>
                        {props.precio}
                        </h6>
                        <br></br>
                        {props.cuotas}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>

        </>
    )
}

export default Producto;