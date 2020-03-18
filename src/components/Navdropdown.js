import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navdropdown.css';
import Productos1 from '../Productos1';

import {
  Link,
} from "react-router-dom";
import ReactDOM from "react-dom";


const Navdropdown = () => {

  return (
      <Navbar bg="light" expand="lg" className="nav">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/productos">Mochilas</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/marcas">Action</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className="item">Mayoristas</Nav.Link>
            <Nav.Link href="#link" className="item">Giftshop</Nav.Link>
            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="item">Sale!</Nav.Link>
            <Nav.Link href="#link" className="item">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Navdropdown;