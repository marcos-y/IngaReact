import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Mochila from './Mochila.png';
import './Carousel2.css';

const Carousel2 = () => {

    return (
        <>
        <div className="Carousel2">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Mochila}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Mochila}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Mochila}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default Carousel2;