import React, { useState, useEffect } from 'react';
import './InfoProductoElegido.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ProductoModal from './ProductoModal';
import ListGroup from 'react-bootstrap/ListGroup';
import ico1 from '../icons/creditcard.png';
import ico2 from '../icons/truck.png';

const InfoProductoElegido = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [total, setTotal] = useState(parseInt(props.precio));
    const [cant,setCant] = useState(0);

    const handleAddCant = (cantidad) => {
        setCant(cantidad);
        console.log(cant);
    }

    const handlRestarCant = (cantidad) =>{
        setCant(cantidad);
        console.log(cant);
    }

    const handleSubmit = event => {

        setShow(true);

        /* AGREGO AL ARRAY GLOBAL*/
        const name = props.name;
        const price = props.precio;
        const cantidad = cant;
        setTotal(parseInt(total) + parseInt(price));
        const prods = { name, price, total, cantidad }
        props.onAddProd(prods)
        console.log(props.productos);

    }


    return (
        <>
            <div className="InfoProductoElegido">

                <h1 className="h1">{props.name}</h1>
                <h3>${props.precio}</h3>

                <div className="medioPago">
                    <img src={ico1} className="image"></img>
                    <h6>Ver medios de pago</h6>
                </div>

                <hr className="hr"></hr>
                <Button variant="light" className="button" onClick={handleSubmit}  >Agregar al carrito</Button>

                <div className="envio">
                    <img src={ico2} className="image2"></img>
                    <h6>Conoce nuestras opciones de envio</h6>
                </div>

                <InputGroup className="forms">
                    <FormControl
                        placeholder="CP"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="form"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" className="button">Calcular</Button>
                    </InputGroup.Append>
                </InputGroup>

                <h6>Exterior:</h6>
                <li>Mochila</li>
                <li>Manijas</li>
                <li>Herrajes</li>
                <li>Acceso</li>
                <li>Bolsillo</li>
                <li>Chapon</li>

                <h6>Interior:</h6>
                <li>Tela estampada</li>
                <li>Medidas:</li>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Producto / Subtotal</Modal.Title>
                </Modal.Header>

                <Modal.Body>{
                    props.productos.map((produ, i) => {
                        return <><ProductoModal key={i} nombre={props.productos[i].name} 
                        precio={props.productos[i].price} onAddCant={handleAddCant} onRestarCant={handlRestarCant}></ProductoModal>
                            <h6>Subtotal (sin envio): ${props.productos[i].total * cant}</h6></>
                    })
                }

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light" onClick={handleClose} className="boton2">
                        COMPRAR
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InfoProductoElegido;