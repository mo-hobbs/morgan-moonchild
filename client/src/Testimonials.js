import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

import { Container, Row, Card } from "react-bootstrap";

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    const filteredArray = () => {
        console.log(testimonials)
    }

    useEffect(() => {
        fetch(`/reviews`).then((response) => {
            if (response.ok) {
            response.json().then((testimonials_array) => {
                
                setTestimonials(testimonials_array)
                // setRendered here when deploying and comment out from 
                // const timer to clearInterval
                // setRendered(true)
            });
        } else {
            response.json().then((error) => console.log(error))
        }
        });
    }, []);

    function renderTestimonials() {
        return Object.values(testimonials).map((review) => {
            return (
                <Container >
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
            </Container>
            )
        }
        )
    }

    return (
        <Container>
            <Row>
                {renderTestimonials()}
            </Row>
            <br></br>
        </Container>
    )
}

export default Testimonials;