import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Product from "./Product";

import { Container } from "react-bootstrap";


function ProductPage() {

    const [products, setProducts] = useState([]);
    // const [isRendered, setRendered] = useState(false);

    useEffect(() => {
        fetch(`/products`).then((response) => {
          if (response.ok) {
            response.json().then((product_array) => {
                setProducts(product_array)
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

    function renderProducts() {
        return Object.values(products).map(p =>
                <ProductCard 
                key={p.id} 
                p={p}
                />
        )
    }

    return (
        <Container >
            {renderProducts()}
        </Container>
    )
}


export default ProductPage;