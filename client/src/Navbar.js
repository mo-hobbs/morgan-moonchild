import React from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo_wg_rectangle from './images/logo-rectangle-2.png';

function Header({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }


  return (
    <Navbar>
    <Container>
      <div className="nav-div">
      <Navbar.Brand href="/"><img src={logo_wg_rectangle} alt="moon icon and morgan moonchild logo in gold" className="nav-logo" />
      </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="drop-down">

      <div className="nav-buttons">
        <Nav className="me-auto">
          <Nav.Link className= "nav-but" href="/">Home</Nav.Link>
          <Nav.Link className= "nav-but" href="/about">About</Nav.Link>
          <Nav.Link className= "nav-but" href="/contact">Contact</Nav.Link>
          <Nav.Link className= "nav-but" href="/login" onClick={handleLogout}>{user ? "Logout" : "Login" }</Nav.Link>
          <Button href="/shop" size="md" variant="dark" >Shop Now</Button> 
        </Nav>
        </div>
        </div>
      </Navbar.Collapse>
    </Container>
    </Navbar>

  )
}

export default Header;