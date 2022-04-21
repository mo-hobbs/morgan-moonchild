import React from "react";
import { Carousel } from "react-bootstrap";
import feature_1 from "./images/malas-800x400-1.png";
import feature_2 from "./images/malas-800x400-7.png";
import feature_3 from "./images/malas-800x400-2.png";

function FeaturedItems() {
  return (
    <Carousel className="mb-3 mt-4" variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={feature_1}
          alt="First slide"
          href="/shop"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={feature_2}
          alt="Second slide"
          href="/shop"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={feature_3}
          alt="Third slide"
          href="/shop"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default FeaturedItems;
