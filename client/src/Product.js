import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";

import LoadingIcon from "./LoadingIcon";

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [isRendered, setRendered] = useState(false);

  const imageSize = {
    height: "600px",
    width: "600px",
    objectFit: "cover",
  };

  useEffect(() => {
    fetch(`/products/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((product) => {
          // console.log(product)
          setProduct(product);
          setRendered(true);
        });
      } else {
        response.json().then((error) => console.log(error));
      }
    });
  }, [id]);

  //DRY - add a function to render each image and add an image footer with the product_title
  //put each carousel item in a card with a footer?

  return (
    <Container className="mt-4">
      <Row>
        {isRendered ? null : <LoadingIcon />}
        <Card border="light">
          <Card.Body>
            <Card.Header>
              <Card.Title>{product.product_title}</Card.Title>
            </Card.Header>

            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.image1}
                  alt="First slide"
                  style={imageSize}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.image2}
                  alt="Second slide"
                  style={imageSize}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.image3}
                  alt="Third slide"
                  style={imageSize}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.image4}
                  alt="Fourth slide"
                  style={imageSize}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.image5}
                  alt="Fifth slide"
                  style={imageSize}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.image6}
                  alt="Sixth slide"
                  style={imageSize}
                />
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>

        <Col>
          <Card border="light">
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem style={{ whiteSpace: "pre-wrap" }}>
                  {product.description}
                </ListGroupItem>
                <Row className="mt-3 text-center">
                  <Card.Title>${product.price}</Card.Title>

                  <Col>
                    <Button
                      className="mt-3"
                      variant="dark"
                      size="md"
                      href={product.square_url}
                      target="_blank"
                    >
                      Buy Now
                    </Button>
                  </Col>
                </Row>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
