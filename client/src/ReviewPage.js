import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

import { Container, Button, Row } from "react-bootstrap";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/reviews`).then((response) => {
      if (response.ok) {
        response.json().then((reviews_array) => {
          setReviews(reviews_array);
          // setRendered here when deploying and comment out from
          // const timer to clearInterval
          // setRendered(true)
        });
      } else {
        response.json().then((error) => console.log(error));
      }
    });
  }, []);

  //id like to get the filtered reviews to render on the Home page
  function filteredReviews() {
    const randomArray = Object.values(reviews)
      .sort(function (a, b) {
        return 0.5 - Math.random();
      })
      .slice(25);
    return Object.values(randomArray).map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));
  }

  return (
    <Container className="mt-4 mb-4">
      <h2>Reviews and Testimonials</h2>
      {filteredReviews()}
      <Row xs={2} md={4}>
      <Button
        href="/shop"
        size="lg"
        variant="dark"
        className="mt-3 mb-3 mx-auto"
      >
        Shop All Malas
      </Button>
      </Row>
      <br></br>
    </Container>
  );
}

export default ReviewPage;
