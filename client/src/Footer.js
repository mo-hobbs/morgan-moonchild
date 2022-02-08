import React from "react";
import { Container, Image, Row, Col } from 'react-bootstrap';
import logo_wg_rectangle from './images/logo-rectangle-2.png';
import email_icon from './images/email-gold.png';
import linked_in_icon from './images/linked-in-gold.png';
import insta_icon from './images/insta-gold.png';

function Footer() {

    const iconSize = {
        width: "48px",
        height: "48px"
    }

    const logoSize = {
        "width": "50%", 
        "display": "block",
        "margin-left": "auto",
        "margin-right": "auto"
    }

    return (
        <Container>
        <div className="footer">
        <Row>
        <Image src={logo_wg_rectangle} href="/" alt="moon icon and morgan moonchild logo in gold" style={logoSize}/>
        </Row>
        <Row xs="auto" className="justify-content-md-center">
            <Col><img src={email_icon} style={iconSize} /></Col>
            <Col><img src={linked_in_icon} style={iconSize} /></Col>
            <Col><img src={insta_icon} style={iconSize} /></Col>
        </Row>
        </div>
        </Container>
    )
}

export default Footer;