import React from "react";

import { ListGroup, Form } from "react-bootstrap";

function Category({ handleCategory, category }) {
  function handleSelect(e) {
    handleCategory(e.target.value);
  }

  return (
    <Form className="mb-3 mt-5">
      <Form.Group>
        <Form.Label>
          {" "}
          <h5>Category:</h5>
        </Form.Label>
        <Form.Select
          multiple
          aria-label="multiple select example"
          onChange={handleCategory}
          value={category}
          className="form-select input-bg"
        >
          <option selected value="All">
            All
          </option>
          <option value="grounding">Grounding Vibes</option>
          <option value="high">High Vibes</option>
          <option value="protect">Protect Your Vibes</option>
          <option value="balance">Balancing Vibes</option>
          <option value="mini">Mini Malas</option>
          <option value="custom">Made to Order</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Category;
