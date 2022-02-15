import React from "react";
import { Card } from 'react-bootstrap';


function ProductCard({ p, handleClick }) {

    const { id, product_title, price, image1 } = p;

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