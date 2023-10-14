import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    imageSrc:
      "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-1_624e64f7-5df5-4e7b-a606-783deffa9ba4_540x.jpg?v=1492508200",
    title: "Mineral 1",
    link: "/shop1",
  },
  {
    imageSrc:
      "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-11_aecb24c6-5bdc-4419-bc72-9e8e67c2c2bd_540x.jpg?v=1492508656",
    title: "Mineral 2",
    link: "/shop2",
  },
  {
    imageSrc:
      "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-3_fd70e960-1620-4abf-8633-28a8597f78fc_540x.jpg?v=1492508260",
    title: "Mineral 3",
    link: "/shop3",
  },
  {
    imageSrc:
      "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-3_fd70e960-1620-4abf-8633-28a8597f78fc_540x.jpg?v=1492508260",
    title: "Mineral 4",
    link: "/shop3",
  },
];

export default function RandomItems() {
  return (
    <div className="py-10">
      <div className="text-center"></div>

      <div className="flex justify-center mt-6">
        <div className="flex justify-center flex-wrap gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 flex flex-wrap justify-between items-center  p-4 shadow-md"
            >
              <div className="promobox-image-video relative">
                <img
                  src={item.imageSrc}
                  className="w-full h-32 md:h-52 object-cover hover:transform hover:scale-110 transition-transform duration-300 ease-in-out"
                  alt=""
                />
              </div>
              <div className="flex flex-col pl-2 ">
                <div className="text-2xl mb-2 font-light">{item.title}</div>
                <Link
                  to={item.link}
                  className="uppercase underline-offset-4 underline font-light"
                >
                  Shop Now!
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
