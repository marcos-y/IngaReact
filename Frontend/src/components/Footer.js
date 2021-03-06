import React, { useState } from 'react'; 
import './Footer.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import icon1 from '../icons/facebook.png';
import icon2 from '../icons/instagram.png';
import icon3 from '../icons/whatsapp.png';
import { withRouter } from 'react-router-dom';    

const Footer = () => {

    const [mensajes,setMensajes] = useState([]);
    const [nombre,setNombre] = useState("");
    const[mensaje,setMensaje] = useState("");
    const [mail,setMail] = useState("");

    const handleChangeNombre = event => setNombre(event.target.value);
    const handleChangeMensaje = event => setMensaje(event.target.value);
    const handleChangeMail = event => setMail(event.target.value)

    const handleSubmit = () => {
        const mensajeItem = {nombre,mail,mensaje};
        setMensajes ([...mensajes,mensajeItem]);
        console.log(mensajes);
    }

    return (
        <>
            <div className="footer" id="contacto">

                <div className="info2">
                    <h5>Tel...</h5>
                    <h5>IngaHandbags@gmail.com</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3414451082!2d-65.20909168529616!3d-26.829090196182882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1114fb0a6b%3A0xdcd3498490d6cd31!2zR2FsZXLDrWEgU2FuIE1hcnTDrW4!5e0!3m2!1ses!2sar!4v1584109169344!5m2!1ses!2sar" width="300" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <h5>San Martin 667, -LOCAL 11-</h5>
                    <h5>San Miguel de Tucuman, Argentina</h5>
                </div>


                <div className="forms">
                    <label htmlFor="basic-url">Nombre</label>
                    <InputGroup>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={handleChangeNombre} value={nombre} />
                    </InputGroup>

                    <label htmlFor="basic-url">En que podemos ayudarte?</label>
                    <InputGroup >
                        <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={handleChangeMensaje}/>
                    </InputGroup>
                </div>


                <div className="mail">
                    <h3>Dejanos un mensaje</h3>

                    <label htmlFor="basic-url">Email</label>
                    <InputGroup className="mb-3">
                        <FormControl id="basic-url" aria-describedby="basic-addon3" onChange={handleChangeMail} />
                    </InputGroup>

                    <Button variant="light" onClick={handleSubmit}>Enviar</Button>

                    <div className="icons">
                        <img src={icon1} className="icon"></img>
                        <img src={icon2} className="icon"></img>
                        <img src={icon3} className="icon"></img>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;