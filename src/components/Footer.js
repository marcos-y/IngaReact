import React from 'react';
import './Footer.css';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="info">
                    <h5>Tel...</h5>
                    <h5>IngaHandbags@gmail.com</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3414451082!2d-65.20909168529616!3d-26.829090196182882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1114fb0a6b%3A0xdcd3498490d6cd31!2zR2FsZXLDrWEgU2FuIE1hcnTDrW4!5e0!3m2!1ses!2sar!4v1584109169344!5m2!1ses!2sar" width="300" height="300" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <h5>San Martin 667, -LOCAL 11-</h5>
                    <h5>San Miguel de Tucuman, Argentina</h5>
                </div>


                <div className="fomrs">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>

                <div className="mail">
                    <h3>Dejanos un mensaje</h3>
                </div>
            </div>

        </>
    )
}

export default Footer;