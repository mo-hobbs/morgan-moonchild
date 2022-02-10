import React, { useEffect, useState } from "react";

import { Container, Row, Card } from "react-bootstrap";

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`/testimonials`).then((response) => {
            if (response.ok) {
            response.json().then((reviews_array) => {
                setReviews(reviews_array)
                // setRendered here when deploying and comment out from 
                // const timer to clearInterval
                // setRendered(true)
            });
        } else {
            response.json().then((error) => console.log(error))
        }
        });
    }, []);

    function renderReviews() {
        return Object.values(reviews).map((review) => {
            return (
            <Card className="review" key={review.id} 
                review={review}>
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
            )
        }
        )
    }

    return (
        <Container>
            <Row>
                {renderReviews()}
            </Row>
        </Container>
    )
}

export default Reviews;