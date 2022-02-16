import React from "react";
import FeaturedItems from "./FeaturedItems";
import Reviews from "./Reviews";
import Testimonials from "./Testimonials";

import { Button, Container, Row, Col } from "react-bootstrap";

function Home() {
  const buttonStyle = {
    padding: "0.5rem 2rem",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div className="home">
      <Container>
        <Row>
          <FeaturedItems />
        </Row>
        <Row xs={2} md={4}>
          <Button href="/shop" size="lg" variant="dark" style={buttonStyle}>
            Shop All Malas
          </Button>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Reviews />
          {/* <Testimonials /> */}

          <Button
            as={Col}
            className="mx-2"
            href="/reviews"
            size="lg"
            variant="dark"
            style={buttonStyle}
          >
            Read More Reviews
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
