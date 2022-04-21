import React from "react";

import search_icon from "./images/search_icon.png";

import { Form, Button, Row, Col } from "react-bootstrap";

function Search({ handleSearch }) {

  return (
    <Form className="d-flex">
      <Form.Group className="mb-3">
        <Form.Label>
          <h5>Search</h5>
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
          <Col xl={1} className="px-0">
            <Button className="btn-light btn-xs px-0 ">
              <img src={search_icon} alt="magnifying glass search icon"/>
            </Button>
          </Col>
        </Row>
        <Row>
          <Form.Text className="text-muted">
            Search for a product by name or description...
          </Form.Text>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default Search;
