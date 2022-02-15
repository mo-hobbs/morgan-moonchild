import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

import { Container, Row, Card } from "react-bootstrap";

function Testimonials({ randomArray }) {
    const [testimonials, setTestimonials] = useState([]);

    console.log(randomArray)

    return (
        <Container>
            <Row>
                {/* <ReviewCard /> */}
            </Row>
            <br></br>
        </Container>
    )

    // function renderTestimonials() {
    //     return Object.values(testimonials).map((review) => {
    //         return (
    //             <Container >
    //                 <Card className="review" key={review.id} 
    //                     review={review}>
    //                     <Card.Header>★★★★★</Card.Header>
    //                     <Card.Body>
    //                         <blockquote className="blockquote mb-0">
    //                             <p>{review.message}
    //                             </p>
    //                             <footer className="blockquote-footer">
    //                                 {review.reviewer}
    //                             </footer>
    //                         </blockquote>
    //                     </Card.Body>
    //                 </Card>
    //         </Container>
    //         )
    //     }
    //     )
    // }

    // return (
    //     <Container>
    //         <Row>
    //             {renderTestimonials()}
    //         </Row>
    //         <br></br>
    //     </Container>
    // )
}

export default Testimonials;