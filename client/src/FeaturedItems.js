import React from "react";
import { Carousel } from "react-bootstrap";
import featured_item_1 from "./images/featured-item-1.png";
import featured_item_2 from "./images/featured-item-2.png";
import featured_item_3 from "./images/featured-item-3.png";

function FeaturedItems() {

    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={featured_item_1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={featured_item_2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={featured_item_3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default FeaturedItems;