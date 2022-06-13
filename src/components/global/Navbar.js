import React from 'react'
import {Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Navbar_site() {
  return (
    <Navbar collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand as={Link} to="/"><img src={require('../../images/churnr-logo-white.png')} alt="" style={{height: "25px", margin: "0", padding: "0"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto">
      <Nav.Link href="#problem">Problemet</Nav.Link>
        <Nav.Link href="#how">Løsningen</Nav.Link>
        <Nav.Link href="#pricing">Priser</Nav.Link>
        <Nav.Link href="#team">Om os</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link href="#">Log ind</Nav.Link>
      <Button variant="primary" size="m">Kontakt os</Button>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}