import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import Search from "./Search";
import ProductPage from "./ProductPage";
import ProductCard from "./ProductCard";
import Product from "./Product";

function Shop() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");
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

    function handleClick(item) {
        return <Product item={item} />
    }

    function handleSearch(searchText) {
        setSearch(searchText);
    }

    function handleSort(dropdown) {
        setSortBy(dropdown)
    }

    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === "name") {
            return a.name - b.name;
        } else if (sortBy === "price"){
            return a.price - b.price;
        } else {
            return a.id - b.id;
        }
    });
    

    // const updatedListings = sortedProducts.filter((product)=> {
    //     return product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
    // })

    return (
        <Container>
            <h2>Shop All</h2>
            <Search handleSearch={handleSearch}/>
            <ProductPage 
                products={products}
                // products={updatedListings}
                />
        </Container>    
    )
}


export default Shop;