import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Search from "./Search";
import Sort from "./Sort";
import Category from "./Category";

import ProductPage from "./ProductPage";


function Shop() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  // const [isRendered, setRendered] = useState(false);

  useEffect(() => {
    fetch(`/products`).then((response) => {
      if (response.ok) {
        response.json().then((product_array) => {
          setProducts(product_array);
          // setRendered here when deploying and comment out from
          // const timer to clearInterval
          // setRendered(true)
        });
      } else {
        response.json().then((error) => console.log(error));
      }
    });
    //     // Use this code to simulate loading time
    //     const timer = setTimeout(() => {
    //         setRendered(true);
    //     }, 2000);
    //     //cleanup function
    //     return function cleanup() {
    //         console.log("Running cleanup");
    //         // ✅ clear the interval so state is no longer updated
    //         clearInterval(timer);
    //         };
  }, []);

  function handleSearch(searchText) {
    setSearch(searchText);
  }

  function handleSort(dropdown) {
    setSortBy(dropdown);
  }

  function handleCategory(selection) {
    setCategory(selection);
  }

  const sortedProducts = [...products]
    .filter((p) => p.category === category || category === "all")
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name - b.name;
      } else if (sortBy === "price") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const updatedListings = sortedProducts.filter((p) =>
    p.description.includes(search)
  );

  return (
    <Container className="mt-4 mx-auto">
      <Row className="mb-3 text-center">
        <h2>Shop All</h2>
      </Row>
      <Row>
        <Col lg={3}>
          <Container>
            <Search handleSearch={handleSearch} />
            <Sort sortBy={sortBy} handleSort={handleSort} />
            <Category category={category} handleCategory={handleCategory} />
          </Container>
        </Col>
        <Col>
          <Container>
            <ProductPage
              products={updatedListings}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
