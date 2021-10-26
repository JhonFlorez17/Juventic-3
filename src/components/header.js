import React, { Component } from "react";
import "../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  render() {
    return (
      <header className="top-navbar">
        <Navbar
          expand="lg"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <Container className="container">
            <Navbar.Brand className="navbar-brand">
              <img src="images/logo-index.png" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbar-toggler"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="collapse navbar-collapse"
            >
              <Nav variant="pills" as="ul" className="ml-auto">
                <Nav.Item as="li">
                  <LinkContainer to="/home">
                    <Nav.Link>Inicio</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/menu">
                    <Nav.Link eventKey="link-1">Menu</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/about">
                    <Nav.Link eventKey="link-2">Quienes Somos</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/servicios">
                    <Nav.Link>Servicios</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/reserva">
                    <Nav.Link>Reservas</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item as="li">
                  <LinkContainer to="/carrito">
                    <Nav.Link>Carrito</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
