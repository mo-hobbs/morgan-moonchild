import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

function ProductCard({ p }) {

    const { product_title, description, price, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, status } = p;
    console.log(image1)

    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (

        
            <Col>
                <Row>
                <Card>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    <Card.Title>{product_title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                </Card.Body>
                </Card>
            </Row>
            </Col>
          ))}
        </Row>
    )
}



export default ProductCard;