import React from "react";
import { Card } from "react-bootstrap";

function ProductCard({ p, handleClick }) {
  const { id, product_title, price, image1 } = p;

  //figure out Redux to pass product information to the Products page

  function productClicked() {
    handleClick(p);
  }

  return (
    
    <Card.Link
      style={{ textDecoration: "none" }}
      href={`/products/${id}`}
      onClick={() => productClicked()}
    >
      <Card className="mb-3 mx-auto" style={{ width: "16rem" }} >
        <Card.Body style={{ color: "#968F71" }}>
          <Card.Img variant="top" src={image1} />
          <Card.Title className="mt-2 text-truncate">{product_title}</Card.Title>
          <Card.Footer>${price}</Card.Footer>
        </Card.Body>
      </Card>
    </Card.Link>
  );
}

export default ProductCard;
