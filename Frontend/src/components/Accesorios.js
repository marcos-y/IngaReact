import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import mochila from './Mochila.png'
import './Marcas.css';
import Title from './Title';

const Accesorios = () => {
    return (
        <>
            <Title nombre="Accesorios"></Title>


            <CardDeck className="carddeck">
                <Card>
                    <Card.Img variant="top" src={mochila} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
      </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={mochila} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
        content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={mochila} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
      </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>

            <div className="boton">
                <Button variant="secondary">VER TODOS LOS PRODUCTOS</Button>
            </div>
        </>
    )
}
export default Accesorios;