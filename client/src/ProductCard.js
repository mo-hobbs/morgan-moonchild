import React from "react";
import moon_logo_gold from "./images/moon-logo-gold.png";
import { Card } from 'react-bootstrap';


function ProductCard({ p, handleClick }) {

    const { id, product_title, description, price, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, status } = p;

    //figure out Redux to pass product information to the Products page

    function productClicked() {
        handleClick(p);
    }

    return (
        // <Card.Link  onClick={()=>productClicked()} >
            <Card.Link href={`/products/${id}`} onClick={()=>productClicked()} >
                <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={image1} />
                    <Card.Title>{product_title}</Card.Title>
                        <Card.Text>${price}</Card.Text>
                </Card.Body>
                </Card>
            </Card.Link>
    )
}


export default ProductCard;