import React from "react";
import ProductCard from "./ProductCard";
import Product from "./Product";

import { Container, CardGroup } from "react-bootstrap";

function ProductPage({ products }) {
  function handleClick(item) {
    // displays the product page
    return <Product item={item} />;
  }

  function renderProducts() {
    return Object.values(products).map((p) => (
      <ProductCard key={p.id} p={p} handleClick={handleClick} />
    ));
  }

  return (
    <Container>
      <CardGroup>{renderProducts()}</CardGroup>
    </Container>
  );
}

export default ProductPage;
