import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
<Navbar>
<Container>
  <div className="nav-div">
  <Navbar.Brand href="/"> Brand Name Here {" "}
  </Navbar.Brand>
  </div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <div className="drop-down">

  <div class="container" className="nav-buttons">
    <Nav className="me-auto">
      <Nav.Link className= "nav-but" href="/">Home</Nav.Link>
      <Nav.Link className= "nav-but" href="/about">About</Nav.Link>
      <Nav.Link className= "nav-but" href="/contact">Contact</Nav.Link>

    </Nav>
    </div>
    </div>
  </Navbar.Collapse>
</Container>
</Navbar>

  )
}

export default Header;