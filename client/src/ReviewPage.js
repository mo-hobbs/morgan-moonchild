import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Testimonials from './Testimonials';

import { Container } from "react-bootstrap";


function ReviewPage() {
    const [reviews, setReviews] = useState([]);

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
        return Object.values(reviews).map((review) => 
            <ReviewCard 
            key={review.id}
            review={review}
            />
        )
    }
        
    return (
        <Container>
            {renderReviews()}
        </Container>
    )

}

export default ReviewPage;