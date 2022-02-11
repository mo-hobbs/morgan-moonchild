import React, { useEffect, useState } from "react";

function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`/shop/${product.id}`).then((response) => {
          if (response.ok) {
            response.json().then((product) => {
                setProduct(product)
                // setRendered here when deploying and comment out from 
                // const timer to clearInterval
                // setRendered(true)
            });
        } else {
            response.json().then((error) => console.log(error))
        }
        });
    //     // Use this code to simulate loading time
    //     const timer = setTimeout(() => {
    //         setRendered(true);
    //     }, 2000);
    //     //cleanup function 
    //     return function cleanup() {
    //         console.log("Running cleanup");
    //         // ✅ clear the interval so state is no longer updated
    //         clearInterval(timer);
    //         };
    }, []);

    return (
        <div>
        <h1>Mala</h1>
        <p>{product.product_title}</p>
        </div>
    )
}

export default Product;