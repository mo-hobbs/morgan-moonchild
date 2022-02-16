import React from "react";
import { Card } from "react-bootstrap";

function ProductCard({ p, handleClick }) {
  const { id, product_title, price, image1 } = p;

  //figure out Redux to pass product information to the Products page
  const productCardStyle = {
    color: "#968F71",
  };

  function productClicked() {
    handleClick(p);
  }

  return (
    <Card.Link
      style={{ textDecoration: "none" }}
      href={`/products/${id}`}
      onClick={() => productClicked()}
    >
      <Card style={{ width: "20rem" }}>
        <Card.Body style={productCardStyle}>
          <Card.Img variant="top" src={image1} />
          <Card.Title>{product_title}</Card.Title>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Card>
    </Card.Link>
  );
}

export default ProductCard;
