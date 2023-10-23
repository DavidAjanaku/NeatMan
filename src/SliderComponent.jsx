import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  height: "48vh", // Set the height to 100% of the viewport height
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  backgroundSize: "cover",
  paddingLeft:"40px",
};

const slideImages = [
  {
    url: "https://images.pexels.com/photos/56030/pyrite-pyrites-mineral-sulfide-56030.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: (
      <div className="text-white ml-4">
        <h1 className="text-4xl  md:text-5xl">New Collection</h1>
        <h2 className="text-xl my-1 md:text-3xl">Fall 2023</h2>
       <div>
       <p className="text-xl">Sale Off 30% and more gift</p>
       </div>
       <div className="mt-10">
       <a href="#shop-now" className="shop-button bg-green-800  p-4 ">
          SHOP NOW
        </a>
       </div>
      </div>
    ),
  },
  {
    url: "https://images.pexels.com/photos/6945074/pexels-photo-6945074.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: (
      <div className="text-white ml-4">
        <h1 className="text-4xl md:text-5xl">Building</h1>
        <h2 className="text-xl my-1 md:text-3xl">Equipment</h2>
        <p className="text-xl">End Of Catalogue Deal</p>
        <div className="mt-10">
       <a href="#shop-now" className="shop-button bg-green-800  p-4 ">
          DISCOVER NOW
        </a>
        </div>
      </div>
    ),
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide images={slideImages.map((slideImage) => slideImage.url)}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              {slideImage.caption}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
