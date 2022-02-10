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
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={featured_item_2}
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={featured_item_3}
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default FeaturedItems;