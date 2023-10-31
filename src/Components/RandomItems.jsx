import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    imageSrc:
      "https://images.pexels.com/photos/10006619/pexels-photo-10006619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Kryptonite",
    link: "/ProductPage",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/2363577/pexels-photo-2363577.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Crystalline",
    link: "/MarketPlace",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/2363901/pexels-photo-2363901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: " Coal",
    link: "/shop3",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/6044813/pexels-photo-6044813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: " Limestone",
    link: "/shop3",
  },
];

export default function RandomItems() {
  return (
    <div className="py-10">
      <div className="text-center"></div>

      <div className="flex justify-center  mt-6">
        <div className="flex justify-center flex-wrap gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 flex  md:justify-between items-center w-full md:w-fit  p-4 shadow-md"
            >
              <div className="promobox-image-video relative">
                <img
                  src={item.imageSrc}
                  className="w-48 h-48 md:h-52 rounded-xl object-cover hover:transform hover:scale-110 transition-transform duration-300 ease-in-out"
                  alt=""
                />
              </div>
              <div className="flex flex-col pl-2 ml-4  mx-auto">
                <div className="text-xl mb-2 font-bold uppercase">{item.title}</div>
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
