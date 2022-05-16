import React from 'react'
import {Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap'
export default function Navbar_site() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height: "85px", boxShadow: "14px 14px 40px 0 rgb(118 126 173 / 95%);"}}>
    <Container>
    <Navbar.Brand href="#home"><img src={require('../images/churnr-logo.png')} style={{height: "25px"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Forside</Nav.Link>
        <NavDropdown title="Features" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">Om os</Nav.Link>
        <Nav.Link href="#">Kontakt os</Nav.Link>
      </Nav>
      <Nav>
          
      <Button variant="success" size="m">Log ind</Button>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}