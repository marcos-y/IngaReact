import React, { useState } from 'react';
import './InfoProductoElegido.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ProductoModal from './ProductoModal';

const InfoProductoElegido = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="InfoProductoElegido">

                <h1 className="h1">{props.name}</h1>
                <h3>{props.precio}</h3>

                <div className="medioPago">
                    <img src="https://cdn.icon-icons.com/icons2/38/PNG/512/creditcard_payment_4578.png" className="image"></img>
                    <h6>Ver medios de pago</h6>
                </div>

                <hr className="hr"></hr>
                <Button variant="light" className="button" onClick={handleShow}>Agregar al carrito</Button>

                <div className="envio">
                    <img src="https://cdn.icon-icons.com/icons2/1909/PNG/512/4544854-business-comerce-delivery-shop-truck_121454.png" className="image2"></img>
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

                <Modal.Body>
                    <ProductoModal nombre={props.name} precio={props.precio}></ProductoModal>
                    <ProductoModal></ProductoModal>
                    <h6>Subtotal (sin envio):$2000</h6>
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