import React, { useEffect } from "react";
import { Row, Col, Card, Container } from 'react-bootstrap';

function ProductCard({ p }) {

    const { product_title, description, price, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, status } = p;

    function renderImage(imageToString) {
        console.log(imageToString.image1.slice(9, -11));
        //this needs to return a variable that can be put in a src string
        const imageStr = imageToString.image1.slice(9, -11);
        return (
            <img src={imageStr} alt="image of mala" />
        )
    }

    return (
        <Container>
            <Row xs={1} md={2}>
            <Col md={{ span: 4, offset: 4 }}>
            <br />
                <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src="https://i.etsystatic.com/23287327/r/il/2bde7a/3700353637/il_fullxfull.3700353637_msew.jpg" />
                <Card.Body>
                    <Card.Title>{product_title}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container> 


    )
}



export default ProductCard;