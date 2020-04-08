import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel1 from './components/Carousel1';
import Productos from './components/Productos'
import Marcas from './components/Marcas';
import Giftshop from './components/Giftshop';
import Productos1 from './Productos1';
import Accesorios from './components/Accesorios';
import Footer from './components/Footer';
import Sale from './components/Sale';

import Mochilas from './productos/Mochilas';
import Carteras from './productos/Carteras';
import Bandoleras from './productos/Bandoleras';
import Bolsos from './productos/Bolsos';

import Sobres from './productos/Sobres';
import Cintos from './accesorios/Cintos';
import Paraguas from './accesorios/Paraguas';
import Billeteras from './accesorios/Billeteras';
import Pañuelos from './accesorios/Pañuelos';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ProductoElegido from './components/ProductoElegido';

function App() {

  return (
    <>
      <Router>

        <Switch>

          <Route path="/" exact>

            <Header></Header>

            <Carousel1></Carousel1>

            <Productos></Productos>

            <Marcas></Marcas>

            <Giftshop></Giftshop>

            <Accesorios></Accesorios>

            <Sale></Sale>

            <Footer></Footer>


          </Route>

          <Route path="/Carteras" component={Carteras} >

            <Header></Header>

            <Carteras></Carteras>

            <Footer></Footer>

          </Route>

          <Route path="/Bandoleras" component={Bandoleras} >

            <Header></Header>

            <Bandoleras></Bandoleras>

            <Footer></Footer>

          </Route>

          <Route path="/Sobres" component={Sobres}>

            <Header></Header>

            <Sobres></Sobres>

            <Footer></Footer>

          </Route>

          <Route path="/Mochilas" component={Mochilas}>

            <Header></Header>

            <Mochilas></Mochilas>

            <Footer></Footer>

          </Route>

          <Route path="/Bolsos" component={Bolsos}>

            <Header></Header>

            <Bolsos></Bolsos>

            <Footer></Footer>

          </Route>

          <Route path="/Paraguas" component={Paraguas}>
            <Header></Header>

            <Paraguas></Paraguas>

            <Footer></Footer>
          </Route>

          <Route path="/Billeteras" component={Billeteras}>

            <Header></Header>

            <Billeteras></Billeteras>

            <Footer></Footer>
          </Route>

          <Route path="/Cintos" component={Cintos}>

            <Header></Header>

            <Cintos></Cintos>

            <Footer></Footer>

          </Route>

          <Route path="/Pañuelos" component={Pañuelos}>

            <Header></Header>

            <Pañuelos></Pañuelos>

            <Footer></Footer>


          </Route>

          <Route path="/ProductoElegido" component={ProductoElegido}>

          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
