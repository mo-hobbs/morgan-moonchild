import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moon_logo_gold from "./images/moon-logo-gold.png";

import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Product({ item }) {

    // console.log(item)
    const { id } = useParams();
    
    const [product, setProduct] = useState([]);


    console.log(product)

    useEffect(() => {
        fetch(`/products/${id}`).then((response) => {
          if (response.ok) {
            response.json().then((product) => {
                // console.log(product)
                setProduct(product)
                // setRendered here when deploying and comment out from 
                // const timer to clearInterval
                // setRendered(true)
            });
        } else {
            response.json().then((error) => console.log(error))
        }
        });
    //     // Use this code to simulate loading time
    //     const timer = setTimeout(() => {
    //         setRendered(true);
    //     }, 2000);
    //     //cleanup function 
    //     return function cleanup() {
    //         console.log("Running cleanup");
    //         // ✅ clear the interval so state is no longer updated
    //         clearInterval(timer);
    //         };
    }, []);


    return (

        <Container>
            <Row>
                <Col sm={8}>
                <Carousel variant="dark">
                    <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={moon_logo_gold}
                       alt="First slide"
                     />
                     <Carousel.Caption>
                       <h5>{product.product_title}</h5>
                       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={moon_logo_gold}
                       alt="Second slide"
                     />
                    <Carousel.Caption>
                       <h5>Second slide label</h5>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                     <img
                       className="d-block w-100"
                       src={moon_logo_gold}
                       alt="Third slide"
                     />
                     <Carousel.Caption>
                       <h5>Third slide label</h5>
                       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
                   </Carousel.Item>
                 </Carousel>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title>{product.product_title}</Card.Title>
                        <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Product;