import React from "react";

function ProductCard({ p }) {

    const { product_title, description, price, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, status } = p;

    return (
        <div>
            <h4>{product_title}</h4>
            <p>{price}</p>
            <img src={image1} />
        </div>
    )
}



export default ProductCard;