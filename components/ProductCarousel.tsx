import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { productsList } from "../pages/products";
import { NextArrow, PrevArrow } from "./arrows";
import ProductBox from "./ProductBox";

const ProductCarousel = ({ children }) => {
  const settings = {
    infinite: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 536,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default ProductCarousel;
