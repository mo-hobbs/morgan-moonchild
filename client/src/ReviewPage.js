import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Testimonials from "./Testimonials";

import { Container, Button } from "react-bootstrap";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);

  const buttonStyle = {
    padding: "0.5rem 2rem",
    marginLeft: "auto",
    marginRight: "auto",
  };

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
    // return <Testimonials randomArray={randomArray} />
    return Object.values(randomArray).map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));
    // randomArray.map((review) => setEachReview(review))
    // console.log(eachReview);
  }

  function renderReviews() {
    return Object.values(reviews).map((review) => (
      <ReviewCard key={review.id} review={review} />
    ));
  }

  return (
    <Container>
      <h2>Reviews and Testimonials</h2>
      {renderReviews()}
      {filteredReviews()}
      <Button href="/shop" size="lg" variant="dark" style={buttonStyle}>
        Shop All Malas
      </Button>
      <br></br>
    </Container>
  );
}

export default ReviewPage;
