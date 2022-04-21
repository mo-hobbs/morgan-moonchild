import React from "react";

import { Form } from "react-bootstrap";

function Category({ handleCategory, category }) {
  function handleSelect(e) {
    handleCategory(e.target.value);
  }

  return (
    <Form className="mb-3 mt-5">
      <Form.Group>
        <Form.Label>
          <h5>Category:</h5>
        </Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelect}
          value={category}
          className="form-select"
        >
          <option value="all">All</option>
          <option value="grounding vibes">Grounding Vibes</option>
          <option value="high vibes">High Vibes</option>
          <option value="protect your vibes">Protect Your Vibes</option>
          <option value="balancing vibes">Balancing Vibes</option>
          <option value="mini malas">Mini Malas</option>
          <option value="made to order">Made to Order</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Category;
