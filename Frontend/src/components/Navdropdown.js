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
              <NavDropdown.Item href="#action/3.1" ><Link to="/" className="link">Aldei</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >Bagstage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Barbara</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" >Chimola</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Joup</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6" >Lima</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7" >Mango</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.8" >Myroslava</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.9" >Skora</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.9" >Squash</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.9" >Trendy</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.9" >Via Fina</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className="item">Mayoristas</Nav.Link>
            <Nav.Link href="#link" className="item">Giftshop</Nav.Link>
            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="item"><Link to="/Cintos" className="link">Cintos</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"className="item"><Link to="/Pañuelos" className="link">Pañuelos</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"className="item"><Link to="/Billeteras"className="link">Billeteras</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"className="item"><Link to="/Paraguas" className="link">Paraguas</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="item">Sale!</Nav.Link>
            <Nav.Link href="#link" className="item">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Navdropdown;