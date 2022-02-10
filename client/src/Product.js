import React from "react";

function Product({ imgSrc }) {

    console.log(imgSrc)
    return (
        <div>
            <img src={imgSrc} />
        </div>
    )
}

export default Product;