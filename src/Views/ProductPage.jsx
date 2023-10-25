import React, { useState } from "react";
import Header from "../Components/Navigation/Header";
import Hamburger from "../Components/Navigation/Hamburger";
import RelatedProducts from "../Components/RelatedProducts";
import Footer from "../Components/Navigation/Footer";

export default function ProductPage() {
  const [mainImage, setMainImage] = useState(
    "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-12_0fedfa52-56e3-404f-b0f6-90c0813be72a.jpg?v=1492508657"
  );

  const otherImages = [
    "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-11_aecb24c6-5bdc-4419-bc72-9e8e67c2c2bd.jpg?v=1492508656",
    "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-5_4379a6fd-dfcd-4442-8a23-43643c74c3cf.jpg?v=1492508658",
    "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-6_3190b6f1-1588-4d1b-96d8-0811824ca950.jpg?v=1492508659",
  ];

  const [selectedWeight, setSelectedWeight] = useState(1);

  const calculatePrice = () => {
    const basePrice = 4000; // Replace with your base price

    // Check if selectedWeight is a valid number; otherwise, default to 1 kg
    const weight = isNaN(selectedWeight) ? 1 : parseFloat(selectedWeight);

    return basePrice * weight;
  };

  const handleWeightChange = (event) => {
    const newWeight = parseFloat(event.target.value);
    setSelectedWeight(newWeight);
  };

  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    description: (
      <p className="text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        expedita exercitationem quis odio perspiciatis placeat veniam. Ad ipsum,
        cum accusamus libero recusandae quasi quisquam, natus omnis laborum
        laudantium commodi ut.
      </p>
    ),
    reviews: <p className="text-slate-500">Reviews content goes here.</p>,
    customTab1: (
      <p className="text-slate-500">Custom Tab 1 content goes here.</p>
    ),
    customTab2: (
      <p className="text-slate-500">Custom Tab 2 content goes here.</p>
    ),
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="md:w-[90%] md:mx-auto p-4">
        <div>
          <Header />
          <Hamburger />
        </div>

        <div className="product-page md:flex mx-auto p-4">
          <div className="product-image md:w-3/6">
            <div className=" p-4">
              <div className=" p-4">
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="flex flex-wrap space-x-2 gap-2 ">
                {otherImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                    className="w-14 md:w-32  border cursor-pointer transform transition-transform hover:scale-105"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="product-shop md:my-14 md:w-2/4">
            <div>
              <div className="fixed-product">
                <div className="product-title">
                  <h1 className="text-3xl">Mineral Resources</h1>
                </div>
                <div className="product-price text-xl my-4">
                  ₦{calculatePrice()}
                </div>
              </div>
              <section>
                <form action="">
                  <div className="mt-4">
                    <label
                      htmlFor="weightInput"
                      className="block text-sm text-gray-600"
                    >
                      Input Weight (kg):
                    </label>
                    <input
                      type="number"
                      id="weightInput"
                      step="0.1"
                      min="0.1"
                      value={selectedWeight}
                      onChange={handleWeightChange}
                      className="w-2/6 my-2 p-2"
                    />
                  </div>

                  <div className="w-full mt-4">
                    <button className="bg-green-800 w-full uppercase text-white px-4 py-2">
                      Purchase item
                    </button>
                  </div>
                </form>
              </section>

              <section className="tabs mt-32">
                <div className="flex flex-wrap text-sm md:border-b-2 ">
                  <button
                    onClick={() => handleTabClick("description")}
                    className={`tab-button ${
                      activeTab === "description"
                        ? "active-tab bg-green-600 text-white"
                        : ""
                    } py-2 px-4  focus:outline-none`}
                  >
                    DESCRIPTION
                  </button>
                  <button
                    onClick={() => handleTabClick("reviews")}
                    className={`tab-button ${
                      activeTab === "reviews"
                        ? "active-tab bg-green-600 text-white"
                        : ""
                    } py-2 px-4  focus:outline-none`}
                  >
                    REVIEWS
                  </button>
                  <button
                    onClick={() => handleTabClick("customTab1")}
                    className={`tab-button ${
                      activeTab === "customTab1"
                        ? "active-tab bg-green-600 text-white"
                        : ""
                    } py-2 px-4  focus:outline-none`}
                  >
                    SPECIFICATIONS 1
                  </button>
                  <button
                    onClick={() => handleTabClick("customTab2")}
                    className={`tab-button ${
                      activeTab === "customTab2"
                        ? "active-tab bg-green-600 text-white"
                        : ""
                    } py-2 px-4  focus:outline-none`}
                  >
                    SPECIFICATIONS 2
                  </button>
                </div>
                <div className="p-4">{tabContent[activeTab]}</div>
              </section>
            </div>
          </div>
        </div>
        <div>
          <RelatedProducts />
        </div>
      </div>
      <Footer />
    </div>
  );
}
