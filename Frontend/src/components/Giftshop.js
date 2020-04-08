import React from 'react';
import './Marcas.css';
import Title from './Title';
import imgGift from './gifshopCortado.png';
import Button from 'react-bootstrap/Button';
import './Giftshop.css';

const Giftshop = () => {

    return (
        <>
            <Title nombre="Giftshop"></Title>
            <div className="giftShop" id="giftshop">
                <img src={imgGift}></img>
                <br></br>
                <Button variant="secondary" id="boton">Regalar una giftcard</Button>
            </div>
        </>
    )
}

export default Giftshop;