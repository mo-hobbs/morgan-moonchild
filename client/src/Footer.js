import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import footer from "./images/footer-400x100.png";
import email_icon from "./images/email-gold.png";
import linked_in_icon from "./images/linked-in-gold.png";
import insta_icon from "./images/insta-gold.png";

function Footer() {
  const iconSize = {
    width: "48px",
    height: "48px",
  };

  return (
    <Container className="footer">
      <Row xs="auto" className="justify-content-center mt-5">
        <a href="/">
          <Image
            className="justify-content-center"
            src={footer}
            href="/"
            alt="moon icon and morgan moonchild logo in gold"
          />
        </a>
      </Row>
      <Row xs="auto" className="justify-content-center">
        <Col>
          <a href="/contact">
            <img src={email_icon} style={iconSize} alt="email icon" />
          </a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/morganlhobbs/" target="_blank" rel="noreferrer">
            <img src={linked_in_icon} style={iconSize} alt="linked in icon" />
          </a>
        </Col>
        <Col>
          <a href="https://www.instagram.com/morgan.moonchild/" target="_blank" rel="noreferrer">
            <img src={insta_icon} style={iconSize} alt="instagram-icon" />
          </a>
        </Col>
      </Row>
      <Row className="text-center" style={{color: "#968F71"}}>
        <p><small>© 2023 Morgan Moonchild Inc.</small></p>
      </Row>
    </Container>
  );
}

export default Footer;
