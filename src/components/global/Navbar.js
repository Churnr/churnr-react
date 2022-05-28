import React from 'react'
import {Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Navbar_site() {
  return (
    <Navbar collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand as={Link} to="/"><img src={require('../../images/churnr-logo.png')} alt="" style={{height: "25px", margin: "0", padding: "0"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto">
        <NavDropdown title="Features" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">Case Studies</Nav.Link>
        <Nav.Link href="#">Priser</Nav.Link>
        <Nav.Link as={Link} to="/About">Om os</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link href="#">Log ind</Nav.Link>
      <Button variant="success" size="m">Kontakt os</Button>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}