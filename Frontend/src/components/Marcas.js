import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import marca1 from '../marcas/aldei.png';
import marca2 from '../marcas/bagstage.png';
import marca3 from '../marcas/barbara.png';
import marca4 from '../marcas/chimola.png';
import marca5 from '../marcas/joup.png';
import marca6 from '../marcas/lima.png';
import marca7 from '../marcas/mango.png';
import marca8 from '../marcas/myroslava.png';
import marca9 from '../marcas/squash.png';
import marca10 from '../marcas/skora.png';
import marca11 from '../marcas/trendy.png';
import marca12 from '../marcas/via-fina.png';
import './Marcas.css'
import Title from './Title';


const Marcas = () => {
    return (
    <>
     
        <Title nombre="Marcas"></Title>


        <div className="marcas">
            <>
            <img src={marca1}/> 
            </>

            <img src={marca2}/>

            <img src={marca3}/>
        </div>

        <div className="marcas">
            <>
            <img src={marca4}/> 
            </>

            <img src={marca5}/>

            <img src={marca6}/>
        </div>

        <div className="marcas">
            <>
            <img src={marca7}/> 
            </>

            <img src={marca8}/>

            <img src={marca9}/>
        </div>

    </>
    )
}

export default Marcas;