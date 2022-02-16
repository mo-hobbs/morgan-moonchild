import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Product from "./Product";

import { Container, CardGroup } from "react-bootstrap";

function ProductPage({ products }) {
  function handleClick(item) {
    return <Product item={item} />;
    // return Object.values(item).map(p =>
    //     console.log(p)
    //     // <Product
    //     // p={p}
    //     // />
    // )
  }

  function renderProducts() {
    return Object.values(products).map((p) => (
      <ProductCard key={p.id} p={p} handleClick={handleClick} />
    ));
  }

  return (
    <Container className="mt-4">
      <CardGroup>{renderProducts()}</CardGroup>
    </Container>
  );
}

export default ProductPage;
