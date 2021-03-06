import React from "react";
import FeaturedItems from "./FeaturedItems";
import Reviews from "./Reviews";

import { Button, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container className="home">
        <Row>
          <FeaturedItems />
        </Row>
        <Row xs={2} md={4}>
          <Button
            className="mt-3 mb-3 mx-auto"
            href="/shop"
            size="lg"
            variant="dark"
          >
            Shop All Malas
          </Button>
        </Row>
      </Container>
      <Container>
        <Reviews />
        {/* <Testimonials /> */}
        <Row xs={2} md={4}>
          <Button
            className="mt-3 mb-3 mx-auto"
            href="/review"
            size="lg"
            variant="dark"
          >
            Read More Reviews
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Home;
