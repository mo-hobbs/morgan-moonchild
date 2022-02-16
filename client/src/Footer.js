import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import logo_wg_rectangle from "./images/logo-rectangle-2.png";
import email_icon from "./images/email-gold.png";
import linked_in_icon from "./images/linked-in-gold.png";
import insta_icon from "./images/insta-gold.png";

function Footer() {
  const iconSize = {
    width: "48px",
    height: "48px",
  };

  const logoSize = {
    width: "400px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <Container className="footer">
      <Row>
        <a href="/">
          <Image
            src={logo_wg_rectangle}
            href="/"
            alt="moon icon and morgan moonchild logo in gold"
            style={logoSize}
          />
        </a>
      </Row>
      <Row xs="auto" className="justify-content-md-center">
        <Col>
          <a href="/contact">
            <img src={email_icon} style={iconSize} alt="email icon" />
          </a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/morganlhobbs/" target="_blank">
            <img src={linked_in_icon} style={iconSize} alt="linked in icon" />
          </a>
        </Col>
        <Col>
          <a href="https://www.instagram.com/morgan.moonchild/" target="_blank">
            <img src={insta_icon} style={iconSize} alt="instagram-icon" />
          </a>
        </Col>
      </Row>
      <Row className="text-center" style={{color: "#968F71"}}>
        <p><small>© 2020</small></p>
      </Row>
    </Container>
  );
}

export default Footer;
