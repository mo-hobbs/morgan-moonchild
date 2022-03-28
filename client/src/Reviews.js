import ReviewCard from "./ReviewCard";

import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/testimonials`).then((response) => {
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

  function renderReviews() {
    return Object.values(reviews).map((review) => {
      return (
        <ReviewCard key={review.id} review={review} />
      );
    });
  }

  return <Container>{renderReviews()}</Container>;
}

export default Reviews;
