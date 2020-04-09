import React from 'react';
import './ProductoModal.css';
import imagen from './Mochila.png';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const ProductoModal = (props) => {

    return (
        <>
            <div className="ProductoModal">
                <img src={imagen} className="imagen"></img>

                <div className="info">
                    <h6>{props.nombre}</h6>
                    <h6>{props.precio}</h6>

                    <div className="botonComprar">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Button variant="light" className="boton3">+</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" placeholder="1"
                                aria-label="Recipient's username" />
                            <InputGroup.Prepend>
                                <Button variant="light" className="boton3">-</Button>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </div>

                </div>

                <div className="borrar">
                    <h6>{props.precio}</h6>
                    <img src="https://cdn.icon-icons.com/icons2/1919/PNG/512/biggarbagebin_121980.png" className="icon2"></img>
                </div>

            </div>

        </>
    )
}

export default ProductoModal;