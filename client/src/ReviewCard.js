import React from "react";

import { Container, Card } from "react-bootstrap";


function ReviewCard({ review }) {
    return (
        <Container >

            <Card className="review" >
                <Card.Header>★★★★★</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>{review.message}
                        </p>
                        <footer className="blockquote-footer">
                            {review.reviewer}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ReviewCard;