import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo_wg_rectangle from './images/logo-rectangle-2.png';

function Header() {
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

  <div className="container" className="nav-buttons">
    <Nav className="me-auto">
      <Nav.Link className= "nav-but" href="/">Home</Nav.Link>
      <Nav.Link className= "nav-but" href="/about">About</Nav.Link>
      <Nav.Link className= "nav-but" href="/contact">Contact</Nav.Link>
      <Nav.Link className= "nav-but" href="/shop">Shop Now</Nav.Link>
    </Nav>
    </div>
    </div>
  </Navbar.Collapse>
</Container>
</Navbar>

  )
}

export default Header;