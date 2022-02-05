import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./styles/Navbar.css";

function Header() {
  return (
    <Navbar className="navbar" bg="dark" expand="lg" variant="dark">
      <Container className="navbar-container">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://image.flaticon.com/icons/png/512/831/831292.png"
            width="60"
            height="60"
            className="d-inline-block align-top brand-logo"
          />
          {""}
          <h1 className="brand-text">Brand</h1>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse collapseOnSelect>
          <Nav
            className="me-auto nav-links justify-content-end"
            style={{ width: "100%" }}
          >
            <Nav.Link href="" className="nav-link">Products</Nav.Link>
            <Nav.Link href="" className="nav-link">Services</Nav.Link>
            <Nav.Link href="" className="nav-link">About</Nav.Link>
            <Nav.Link href="" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;