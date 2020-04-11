import React, { useState } from 'react'; 
import './ProductoModal.css';
import imagen from './Mochila.png';
import bin from '../icons/bin.png';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const ProductoModal = (props) => {

    const [cont,setCont] = useState(0);

    const handleClickSuma = () =>{
        setCont(parseInt(cont)+1);
        props.onAddCant(cont);
        
    }

    const handleClickResta = () =>{
        if (cont>=1){
            setCont(parseInt(cont)-1);
            props.onRestarCant(cont);
        }
        
    }

    return (
        <>
            <div className="ProductoModal">
                <img src={imagen} className="imagen"></img>

                <div className="info">
                    <h6>{props.nombre}</h6>
                    <h6>${props.precio}</h6>

                    <div className="botonComprar">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Button variant="light" className="boton3" onClick={handleClickSuma}>+</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" placeholder={cont}
                                aria-label="Recipient's username" />
                            <InputGroup.Prepend>
                                <Button variant="light" className="boton3" onClick={handleClickResta}>-</Button>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </div>

                </div>

                <div className="borrar">
                    <h6>${props.precio}</h6>
                    <img src={bin} className="icon2"></img>
                </div>

            </div>

        </>
    )
}

export default ProductoModal;