import React from 'react';
import './Sale.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import mochila from './Mochila.png';


const Sale = () => {
    return (
        <>
            <div className="Sale" id="sale">
                <div className="hrdiv">
                    <hr />
                    <h1 className="lobster">Sale</h1>
                    <hr />
                </div>
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

            </div>

        </>
    )
}

export default Sale;