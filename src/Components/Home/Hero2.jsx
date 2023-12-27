import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import dummy from "../../assets/dummy.png";
import { SfButton } from "@storefront-ui/react";

const Hero2 = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // console.log(products)

  return (
    <div className="py-10 md:px-5">
      <div>
        <h1 className="text-2xl font-medium">New Arivals</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          illo debitis? Neque eum quisquam ipsa.
        </p>
      </div>
      <div className="pt-5">
        <div className="flex flex-wrap gap-5 md:justify-between">
          {
            products.map((product, index) => (
              <ProductCard
                key={index}
                img={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
                // desc = {product.description}
                rating = {product.rating}
              />
            ))
          }
        </div>
      </div>
      <div className="flex items-center justify-center pt-5">
        <SfButton variant="secondary">View More</SfButton>
      </div>
    </div>
  );
};

export default Hero2;
