import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Productos.css'
import mochila from './Mochila.png'
import Button from 'react-bootstrap/Button'

const Productos = () => {

    return (
        <>
            <div className="productos">

                <>
                    <div className="hrdiv">
                        <hr />
                        <h1>Productos</h1>
                        <hr />
                    </div>
                </>

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
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
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
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
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
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>

                <div className="boton">
                <Button variant="secondary">VER TODOS LOS PRODUCTOS</Button>
                </div>
            </div>
        </>
    )
}

export default Productos;