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

        <Header></Header>

        <Switch>

          <Route path="/" exact>

            <Carousel1></Carousel1>

            <Productos></Productos>

            <Marcas></Marcas>

            <Giftshop></Giftshop>

            <Accesorios></Accesorios>

            <Sale></Sale>

          </Route>

          <Route path="/Carteras" component={Carteras} >

          </Route>

          <Route path="/Bandoleras" component={Bandoleras} >

          </Route>

          <Route path="/Sobres" component={Sobres}>

          </Route>

          <Route path="/Mochilas" component={Mochilas}>

          </Route>

          <Route path="/Bolsos" component={Bolsos}>

          </Route>

          <Route path="/Paraguas" component={Paraguas}>

          </Route>

          <Route path="/Billeteras" component={Billeteras}>

          </Route>

          <Route path="/Cintos" component={Cintos}>

          </Route>

          <Route path="/Pañuelos" component={Pañuelos}>

          </Route>

          <Route path="/ProductoElegido" component={ProductoElegido}>

          </Route>

        </Switch>

        <Footer></Footer>

      </Router>
    </>
  );
}

export default App;
