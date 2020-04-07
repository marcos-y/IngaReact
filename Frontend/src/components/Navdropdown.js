import React from 'react';
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
        <Navbar.Brand href="#home"><Link to="/" className="link">Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown"  >
              <NavDropdown.Item href="#action/3.1" className="item"><Link to="/Carteras" className="link">Carteras</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="item"><Link to="/Bandoleras" className="link">Bandoleras</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="item"><Link to="/Sobres" className="link">Sobres</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="item"><Link to="/Mochilas" className="link">Mochilas</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className="item"><Link to="/Bolsos"className="link">Bolsos</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="item"><Link to="/" className="link">Aldei</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="item">Bagstage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="item">Barbara</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="item">Chimola</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5" className="item">Joup</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" className="item">Lima</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7" className="item">Mango</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.8" className="item">Myroslava</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.9" className="item">Skora</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.9" className="item">Squash</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.9" className="item">Trendy</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.9" className="item">Via Fina</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" >Mayoristas</Nav.Link>
            <Nav.Link href="#link" >Giftshop</Nav.Link>
            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="item"><Link to="/Cintos" className="link">Cintos</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"className="item"><Link to="/Pañuelos" className="link">Pañuelos</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"className="item"><Link to="/Billeteras"className="link">Billeteras</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"className="item"><Link to="/Paraguas" className="link">Paraguas</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" >Sale!</Nav.Link>
            <Nav.Link href="#link" >Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Navdropdown;