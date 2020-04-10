import React, { useState } from 'react' 
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navdropdown.css';
import Productos1 from '../Productos1';
import Producto from './Producto.css';

import {
  Link,
} from "react-router-dom";
import ReactDOM from "react-dom";


const Navdropdown = () => {

  return (
      <Navbar bg="light" expand="lg" className="nav">
        <Navbar.Brand ><Link to="/" className="link">Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown"  >
              <NavDropdown.Item  className="item"><Link to="/Carteras" className="link">Carteras</Link></NavDropdown.Item>
              <NavDropdown.Item  className="item"><Link to="/Bandoleras" className="link">Bandoleras</Link></NavDropdown.Item>
              <NavDropdown.Item  className="item"><Link to="/Sobres" className="link">Sobres</Link></NavDropdown.Item>
              <NavDropdown.Item  className="item"><Link to="/Mochilas" className="link">Mochilas</Link></NavDropdown.Item>
              <NavDropdown.Item  className="item"><Link to="/Bolsos"className="link">Bolsos</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item className="item"><Link to="/marcas" className="link">Aldei</Link></NavDropdown.Item>
              <NavDropdown.Item  className="item">Bagstage</NavDropdown.Item>
              <NavDropdown.Item  className="item">Barbara</NavDropdown.Item>
              <NavDropdown.Item  className="item">Chimola</NavDropdown.Item>
              <NavDropdown.Item  className="item">Joup</NavDropdown.Item>
              <NavDropdown.Item  className="item">Lima</NavDropdown.Item>
              <NavDropdown.Item  className="item">Mango</NavDropdown.Item>
               <NavDropdown.Item  className="item">Myroslava</NavDropdown.Item>
               <NavDropdown.Item  className="item">Skora</NavDropdown.Item>
               <NavDropdown.Item  className="item">Squash</NavDropdown.Item>
               <NavDropdown.Item  className="item">Trendy</NavDropdown.Item>
               <NavDropdown.Item  className="item">Via Fina</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" >Mayoristas</Nav.Link>
            <Nav.Link href="#giftshop" >Giftshop</Nav.Link>
            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item  className="item"><Link to="/Cintos" className="link">Cintos</Link></NavDropdown.Item>
              <NavDropdown.Item className="item"><Link to="/Pañuelos" className="link">Pañuelos</Link></NavDropdown.Item>
              <NavDropdown.Item className="item"><Link to="/Billeteras"className="link">Billeteras</Link></NavDropdown.Item>
              <NavDropdown.Item className="item"><Link to="/Paraguas" className="link">Paraguas</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sale" >Sale!</Nav.Link>
            <Nav.Link href="#contacto" >Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Navdropdown;