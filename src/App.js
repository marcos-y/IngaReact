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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

          <Route path="/productos" component={Productos1} >

          </Route>
        </Switch>

      <Footer></Footer>
      
      </Router>
    </>
  );
}

export default App;
