import React from "react";

import search_icon from "./images/search_icon.png";

import { Form, Button, Row, Col } from "react-bootstrap";

function Search({ handleSearch }) {
  // let timeout;

  // function myTimeout() {
  //   timeout = setTimeout(handleSearch, 2000);
  // }

  // function handleSubmit() {
  //   clearTimeout(timeout);
  // }

  return (
    <Form className="d-flex">
      <Form.Group className="mb-3">
        <Form.Label>
          <h5>
            Search <img src={search_icon} alt="magnifying glass search icon" />
          </h5>
        </Form.Label>
        <Row>
          <Col>
            <Form.Control
              id="search"
              onChange={(e) => handleSearch(e.target.value)}
              type="search"
              className="me-2"
              aria-label="Search"
            />
          </Col>
        </Row>
        <Row>
          <Form.Text className="text-muted">
            Search for a product by name, description, gemstone, healing
            properties...
          </Form.Text>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default Search;
