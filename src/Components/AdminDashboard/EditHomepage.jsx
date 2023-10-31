import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageUpload from "../../assets/ImageUpload.png";
import Button from "../Button";
import Sidebar from "./Sidebar";


export default function EditHomepage() {
 

  const [slides, setSlides] = useState([
    {
      title: "",
      subtext: "",
      imageFile: null,
    },
    {
      title: "",
      subtext: "",
      imageFile: null,
    },
  ]);

  const handleSlideSubmit = (index) => (event) => {
    event.preventDefault();
    const slide = slides[index];
    console.log(`Slide ${index + 1} submitted:`, slide);
    // You can now process the data for each slide here.
  };

  const handleSlideImageUpload = (index) => (event) => {
    const file = event.target.files[0];
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides];
      updatedSlides[index].imageFile = file;
      return updatedSlides;
    });
  };

  const handleSlideTitleChange = (index) => (event) => {
    const title = event.target.value;
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides];
      updatedSlides[index].title = title;
      return updatedSlides;
    });
  };

  const handleSlideSubtextChange = (index) => (event) => {
    const subtext = event.target.value;
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides];
      updatedSlides[index].subtext = subtext;
      return updatedSlides;
    });
  };

  
  return (
    <div className="flex">
      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh]">
       <Sidebar/>
      </div>
      <div className="main-content flex-1 p-4">
          {slides.map((slide, index) => (
            <form key={index} onSubmit={handleSlideSubmit(index)}>
              <section className="in-page__cell bg-slate-200 rounded-lg shadow-lg p-4">
                <h1 className="fontBold">Slide {index + 1}</h1>
                <div className="my-4">
                  <label htmlFor={`titleInput${index}`} className="font-bold text-sm flex">
                    Title &nbsp;
                    <span className="bg-slate-400 w-5 h-5 rounded-full flex items-center justify-center text-white pb-1">
                      <span>&#161;</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    id={`titleInput${index}`}
                    value={slide.title}
                    onChange={handleSlideTitleChange(index)}
                    maxLength={20}
                    className="border border-gray-300 p-2 mt-2 w-full"
                  />
                  <p className="text-sm text-slate-400">
                    Do not exceed 20 characters when entering the product title
                  </p>
                </div>
                <div className="my-4">
                  <label htmlFor={`subtextInput${index}`} className="font-bold text-sm flex">
                    Subtext &nbsp;
                    <span className="bg-slate-400 w-5 h-5 rounded-full flex items-center justify-center text-white pb-1">
                      <span>&#161;</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    id={`subtextInput${index}`}
                    value={slide.subtext}
                    onChange={handleSlideSubtextChange(index)}
                    maxLength={100}
                    className="border border-gray-300 p-2 mt-2 w-full"
                  />
                  <p className="text-sm text-slate-400">
                    Do not exceed 100 characters when entering the subtext
                  </p>
                </div>
                <div className="my-4">
                  <label htmlFor={`imageUpload${index}`} className="font-bold block">
                    <div className="bg-white border border-gray-300 p-2 mt-2  text-center">
                      {!slide.imageFile && (
                        <span className="text-slate-500 font-bold text-sm">
                          Click here to browse{" "}
                          <img src={ImageUpload} className="w-32 m-auto" alt="" />
                        </span>
                      )}
                      {slide.imageFile && (
                        <img
                          src={URL.createObjectURL(slide.imageFile)}
                          className="w-32"
                          alt="Uploaded"
                        />
                      )}
                    </div>
                  </label>
                  <input
                    type="file"
                    id={`imageUpload${index}`}
                    accept="image/*"
                    onChange={handleSlideImageUpload(index)}
                    className="hidden"
                  />
                  <Button text={`Submit Slide ${index + 1}`} />
                </div>
              </section>
            </form>
          ))}
        </div>

      {/* <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh] overflow-scroll">
        <div>
          <div className="border-b border-gray-300 p-4 fontBold">
            <h2 className=" py-4 fontBold text-2xl">Order Actions</h2>
            <p></p>
          </div>
          <button className="bg-black text-white  m-4 p-2 ">
            Move to Trash
          </button>
        </div>
      </div> */}
    </div>
  );
}
