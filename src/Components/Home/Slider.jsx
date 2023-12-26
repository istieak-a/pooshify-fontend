import React from "react";
import { Carousel } from "antd";

const Slider = () => {
  const carouselData = [
    {
      title: "",
      img: "https://icms-image.slatic.net/images/ims-web/ff00a16d-718e-429c-9402-93de8c9a1ec4.jpg",
      link: "#",
    },
    {
      title: "",
      img: "https://icms-image.slatic.net/images/ims-web/5c12a98a-d398-43fa-8abc-0519b2c15da1.jpg",
      link: "#",
    },
    {
      title: "",
      img: "https://icms-image.slatic.net/images/ims-web/43662830-9f7e-45be-ba53-77613fb26a66.jpg",
      link: "#",
    },
  ];

  return (
      <Carousel autoplay>
      {carouselData.map((item, index) => (
        <SliderDiv key={index} img={item.img} link={item.link} />
      ))}
    </Carousel>
  );
};

const SliderDiv = ({ img, link }) => {
  return (
    <div>
      <a href={link}>
        <img src={img} alt="" />
      </a>
    </div>
  );
};

export default Slider;
