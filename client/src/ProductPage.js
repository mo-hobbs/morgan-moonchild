import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";


import { Container, Card, Button, Row, Col } from 'react-bootstrap';


function ProductPage() {

    const [products, setProducts] = useState([]);
    const [isRendered, setRendered] = useState(false);


    useEffect(() => {
        fetch(`/products`).then((response) => {
          if (response.ok) {
            response.json().then((product_array) => {
                setProducts(product_array)

                // setRendered here when deploying and comment out from 
                // const timer to clearInterval
                // setRendered(true)
            });
        } else {
            response.json().then((error) => console.log(error))
        }
        });

        // Use this code to simulate loading time
        const timer = setTimeout(() => {
            setRendered(true);
        }, 2000);
        //cleanup function 
        return function cleanup() {
            console.log("Running cleanup");
            // ✅ clear the interval so state is no longer updated
            clearInterval(timer);
            };
    }, []);

    function renderProducts() {
        return Object.values(products).map(p => {
            return <div className="product" key={p.id}>
                <ProductCard 
                key={p.id} 
                p={p}
                />
                <Container> 
                {Object.values(products).length > 0 &&
                Object.values(products).map(p => (
                    <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                    <Card key={p.id}>
                        <Card.Img variant="top" src={p.image1} />
                        <Card.Body>
                        <Card.Title>{p.product_title}</Card.Title>
                            <Card.Text>Possibly some text here</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
              ))}
        </Container>
                )

                }
                
            </div>
        }
        )
    }
    


    return (
        <div>
            {renderProducts()}
        </div>
    )
}


export default ProductPage;