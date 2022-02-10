import React from "react";
import moon_logo_gold from "./images/moon-logo-gold.png";
import { Row, Col, Card, Container, Nav } from 'react-bootstrap';




function ProductCard({ p, handleClick }) {

    const { product_title, description, price, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, status } = p;

    // function handleClick(id) {
    //     console.log(id)
    // }

    return (
        <div onClick={()=>handleClick(p.id)}>
        <Container>
            <Row xs={1} md={2}>
            <Col md={{ span: 4, offset: 4 }}>
            <br />
                <Card style={{ width: '28rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={image1.slice(9,-11)} />
                    <Card.Title>{product_title}</Card.Title>
                        <Card.Text>${price}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>  
        </div>
    )
}


export default ProductCard;