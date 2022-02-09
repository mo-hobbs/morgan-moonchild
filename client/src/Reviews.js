import React, { useEffect, useState } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [num, setNum] = useState(0);
    const [featuredReviews, setFeaturedReviews] = useState([]);

    useEffect(() => {
        fetch(`/reviews`).then((response) => {
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
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
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