import React from "react";
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import logo_wg_rectangle from './images/logo-rectangle-2.png';

function Header({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }


  return (
    <Navbar >
      <Container>
      <Navbar.Brand href="/"><img src={logo_wg_rectangle} alt="moon icon and morgan moonchild logo in gold" className="nav-logo" />
        </Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          <Nav.Link className= "nav-but" href="/">Home</Nav.Link>
          <Nav.Link className= "nav-but" href="/about">About</Nav.Link>
          <Nav.Link className= "nav-but" href="/contact">Contact</Nav.Link>
          <Nav.Link className= "nav-but" href="/login" onClick={handleLogout}>{user ? "Logout" : "Login" }</Nav.Link>
          <Nav.Link className= "nav-but" href="/shop">Shop</Nav.Link>
        </Nav>


      </Navbar.Collapse>
        </Container>
    </Navbar>

  )
}

export default Header;