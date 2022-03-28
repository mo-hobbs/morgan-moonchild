import React from "react";

import { Container, Card } from "react-bootstrap";

function ReviewCard({ review }) {
  //add function to render the correct number of stars 

  function renderDate() { 
    if (review.date_reviewed) {
      return "reviewed on: "+review.date_reviewed
    } 
  }


  return (
    <Container className="mb-4">
      <Card className="review">
        <Card.Header>★★★★★</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{review.message}</p>
            <footer className="blockquote-footer ">{review.reviewer}
            <p><i>{renderDate()}</i></p></footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ReviewCard;
