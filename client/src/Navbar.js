import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import logo_wg_rectangle from "./images/logo-rectangle-2.png";

function Header({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo_wg_rectangle}
            alt="moon icon and morgan moonchild logo in gold"
            className="nav-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"/>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="/login" onClick={handleLogout}>
              {user ? "Logout" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
