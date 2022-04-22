import React from "react";

import { Container, Button, Row, Col } from "react-bootstrap";

function WelcomePage({ user }) {
  return (
    <Container className="text-center mb-3 mt-4">
      <Col size={6}>
        <h2>Welcome, {user.username}!</h2>
        <Row className="mt-3 mb-3 mx-auto">
          <p>What would you like to do today?</p>
        </Row>
        <Row xs={2} md={4}>
          <Button
            className="mt-3 mb-3 mx-auto"
            variant="dark"
            size="md"
            href="/learn"
          >
            Learn more about meditation
          </Button>
        </Row>
        <Row xs={2} md={4}>
          <Button
            className="mt-3 mb-3 mx-auto"
            variant="dark"
            size="md"
            href="/shop"
          >
            Shop malas
          </Button>
        </Row>
      </Col>
    </Container>
  );
}

export default WelcomePage;
