import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  height: "48vh", // Set the height to 100% of the viewport height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
};

const slideImages = [
  {
    url: "https://images.pexels.com/photos/56030/pyrite-pyrites-mineral-sulfide-56030.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: "Get Raw Materials",
  },
  {
    url: "https://images.pexels.com/photos/6945074/pexels-photo-6945074.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: "Slide 2",
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
              <h2 style={{ color: "#fff" }}>{slideImage.caption}</h2>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
