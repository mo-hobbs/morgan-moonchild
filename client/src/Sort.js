import React from "react";

import { Form } from "react-bootstrap";

function Sort({ handleSort, sortBy }) {
  function handleChange(e) {
    handleSort(e.target.value);
  }

  return (
    <Form>
      <Form.Group className="mb-3 mt-5">
        <Form.Label>
          <h5>Sort by:</h5>
        </Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleChange}
          value={sortBy}
        >
          <option value="name">Name (A-Z)</option>
          <option value="price">Price (Low-High)</option>
          <option value="priceHigh">Price (High-Low)</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Sort;
