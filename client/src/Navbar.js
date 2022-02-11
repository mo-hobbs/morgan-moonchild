import React from "react";
import { Navbar, NavDropdown, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import logo_wg_rectangle from './images/logo-rectangle-2.png';

function Header({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  const navStyle = {
    color: "black"
  }

  return (
    <Navbar >
      <Container>
      <Navbar.Brand href="/"><img src={logo_wg_rectangle} alt="moon icon and morgan moonchild logo in gold" className="nav-logo" />
        </Navbar.Brand>

      {/* <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          <Nav.Link className= "nav-but" href="/">Home</Nav.Link>
          <Nav.Link className= "nav-but" href="/about">About</Nav.Link>
          <Nav.Link className= "nav-but" href="/contact">Contact</Nav.Link>
          <Nav.Link className= "nav-but" href="/login" onClick={handleLogout}>{user ? "Logout" : "Login" }</Nav.Link>
          <Nav.Link className= "nav-but" href="/shop">Shop</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}

      <NavDropdown title="Menu" href="/" style={navStyle} id="collasible-nav-dropdown">
        <NavDropdown.Item href="/">Home</NavDropdown.Item>
        <NavDropdown.Item href="/shop">Shop</NavDropdown.Item>
        <NavDropdown.Item href="/about">About</NavDropdown.Item>
        <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/login" onClick={handleLogout}>{user ? "Logout" : "Login" }</NavDropdown.Item>
      </NavDropdown>
        </Container>
    </Navbar>

  )
}

export default Header;