import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Sidebar from "./Sidebar";

export default function NewProducts() {
  const [showSchedule, setShowSchedule] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [frontImage, setFrontImage] = useState("");
  const [alternateImage, setAlternateImage] = useState("");
  const [specifications, setspecifications] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    details: "",
  
    tags: "",
  });




  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((category) => category !== value));
    }
  };

  const handleNewCategorySubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, newCategory]);
    setNewCategory("");
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      categories,
      galleryImages,
      frontImage,
      specifications,
    };
    console.log("Submitted data:", data);
    // Add your submission logic here

    // Reset the form and sidebar data
    setFormData({
      title: "",
      details: "",
    
      tags: "",
    });
    setCategories([]);
    setGalleryImages([]);
    setFrontImage("");
  
    setspecifications("");
  };

  const handlePublish = () => {
    handleSubmit();
    // Add additional logic for publishing, e.g., show a success message, redirect, etc.
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex">
      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh]">
        <Sidebar />
      </div>
      <div className="main-content flex-1 bg-white h-[100vh] p-4 ">
        <header>
          <div className="flex my-4 items-center">
            <h1 className="fontBold text-lg">Add New Products</h1>
          </div>
        </header>

        <div className="bg-slate-200 rounded-lg shadow-lg p-4">
          <form className="border border-gray-300 p-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="fontBold">
                Product Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 w-full p-2"
              />
            </div>
            <div>
              <label htmlFor="details" className="fontBold">
                Product Details
              </label>
              <textarea
                id="details"
                name="details"
                rows="4"
                value={formData.details}
                onChange={handleChange}
                className="border border-gray-300 w-full p-2"
              ></textarea>
            </div>

            <div className="border-b border-gray-300  fontBold">
              <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
                Specifications
              </h2>
              <div>
                <input
                  type="text"
                  value={specifications}
                  onChange={(e) => setspecifications(e.target.value)}
                  className="border border-gray-300 w-full p-2"
                />

                <label
                  htmlFor=""
                  className="block text-sm text-gray-600"
                >
                  Select a resource:
                </label>
                <select className="w-full my-2 p-2">
                  <option value="bronze">bronze</option>
                  <option value="aluminium">Aluminium</option>
                  <option value="copper">Copper</option>
                </select>
              </div>
            </div>

            <Button text=" Add Product" />
          </form>
        </div>
      </div>

      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh] overflow-scroll">
        <div className="">
          <div className="border-b border-gray-300 p-4 fontBold">
            <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
              Publish
            </h2>
            <p>
              <span className="fontBold">Published</span> on August 20, 2023 at
              4:30pm
            </p>
          </div>
          <button
            className="bg-black text-white  m-4 p-2 "
            onClick={handlePublish}
          >
            Submit
          </button>
          <button className="bg-black text-white  m-4 p-2">
            Save to draft
          </button>
        </div>

        <div className="border-b border-gray-300 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Product Image
          </h2>
          <div>
            <label htmlFor="frontImage" className="fontBold">
              Front Image
            </label>
            <input
              type="file"
              id="frontImage"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                setFrontImage(URL.createObjectURL(file));
              }}
            />
          </div>

          <div className="image-preview flex my-4">
            {frontImage && (
              <img
                src={frontImage}
                alt="Front Image"
                className="image h-14 mr-4 "
              />
            )}
            {alternateImage && (
              <img
                src={alternateImage}
                alt="Alternate Image"
                className="image h-14"
              />
            )}
          </div>
        </div>

        <div className="border-b border-gray-300 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Product Gallery
          </h2>
          <div>
            <input
              type="file"
              multiple
              onChange={(event) => {
                const files = event.target.files;
                const imagesArray = Array.from(files).map((file) =>
                  URL.createObjectURL(file)
                );
                setGalleryImages([...galleryImages, ...imagesArray]);
              }}
            />
          </div>
          <div className="gallery-images flex">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index}`}
                className="gallery-image h-16 mr-4 my-4"
              />
            ))}
          </div>
        </div>

        <div className="border-b border-gray-300 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Product Categories
          </h2>
          <div>
            <label>
              <input
                type="checkbox"
                value="Featured Products"
                onChange={handleCategoryChange}
              />{" "}
              Featured Products
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Random"
                onChange={handleCategoryChange}
              />{" "}
              Random
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Travel"
                onChange={handleCategoryChange}
              />{" "}
              Travel
            </label>
          </div>
        
        </div>
        <div className="border-b border-gray-300 mb-10 p-4 fontBold">
          <h2 className="border-b border-gray-300 py-4 fontBold text-2xl">
            Tags
          </h2>
          <p className="text-slate-400">
            include a tag if you choose featured to properly set the item there
          </p>
          <label className="fontBold">Tags</label>
          <div>
            <label
              htmlFor="resourceSelect"
              className="block text-sm text-gray-600"
            >
              Select a resource:
            </label>
            <select className="w-full my-2 p-2">
              <option value="coal">Coal</option>
              <option value="aluminium">Aluminium</option>
              <option value="copper">Copper</option>
            </select>
          </div>
        </div>
      </div>

    
    </div>
  );
}
