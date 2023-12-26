import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import dummy from '../../assets/dummy.png'

const Hero2 = () => {

    const productData = [
        {
          title: "Product 1",
          desc: "Lorem ipsum dolor sit amet.",
          img: {dummy},
          price: "100"

        },
        {
          title: "Product 2",
          desc: "Lorem ipsum dolor sit amet.",
          img: {dummy},
          price: "100"
        },
        {
          title: "Product 3",
          desc: "Lorem ipsum dolor sit amet.",
          img: {dummy},
          price: "100"
        },
        {
          title: "Product 4",
          desc: "Lorem ipsum dolor sit amet.",
          img: {dummy},
          price: "100"
        },
        {
          title: "Product 5",
          desc: "Lorem ipsum dolor sit amet.",
          img: {dummy},
          price: "100"
        },
        {
          title: "Product 6",
          desc: "Lorem ipsum dolor sit amet.",
          img: {dummy},
          price: "100"
        },
        {
          title: "Product 7",
          desc: "Lorem ipsum dolor sit amet.",
          img: {dummy},
          price: "100"
        },
        {
          title: "Product 8",
          desc: "Lorem ipsum dolor sit amet.",
          img: {dummy},
          price: "100"
        },
    ]


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
          {productData.map((item, index) => (
            <ProductCard key={index} title={item.title} desc={item.desc} img={item.img} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero2;
