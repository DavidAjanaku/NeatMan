import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  color: "#fff",
  fontSize: "20px",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
};

const slideImages = [
  {
    url: "https://images.pexels.com/photos/56030/pyrite-pyrites-mineral-sulfide-56030.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: "Get Raw MAterials",
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
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
