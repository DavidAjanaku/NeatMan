import React, { useState } from "react";
import Hamburger from "../Components/Navigation/Hamburger";
import Header from "../Components/Navigation/Header";
import { Link } from "react-router-dom";
import rightArrow from "../assets/line-angle-right-icon.svg";
import Footer from "../Components/Navigation/Footer";
import dropdown from "../assets/descending-icon.svg";

export default function MarketPlace() {
  const [priceFilter, setPriceFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [cart, setCart] = useState([]); // Initialize an empty cart
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); // State for the filter modal

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$49.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-10_8d6efa73-0aa1-4b7c-90a2-219b34c9850a_540x.jpg?v=1492508598",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$29.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-10_8d6efa73-0aa1-4b7c-90a2-219b34c9850a_540x.jpg?v=1492508598",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$39.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-10_8d6efa73-0aa1-4b7c-90a2-219b34c9850a_540x.jpg?v=1492508598",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$19.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-10_8d6efa73-0aa1-4b7c-90a2-219b34c9850a_540x.jpg?v=1492508598",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$39.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-10_8d6efa73-0aa1-4b7c-90a2-219b34c9850a_540x.jpg?v=1492508598",
    },
    {
      id: 6,
      name: "Product 6",
      price: "$19.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-10_8d6efa73-0aa1-4b7c-90a2-219b34c9850a_540x.jpg?v=1492508598",
    },
  ];

  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="md:w-[90%] md:mx-auto p-4">
        <div>
          <Header />
          <Hamburger />
        </div>
        <div className="clearfix py-9 bg-slate-200 my-2 p-10 hidden lg:block">
          <div className="breadcrumb">
            <div className="breadcrumb__position flex items-center">
              <Link to="/" className="text-sm">
                Home
              </Link>
              <span className="mx-4">
                <img src={rightArrow} className="w-2" alt="" />
              </span>
              <strong className="font-light text-sm">Your Shopping Cart</strong>
            </div>
          </div>
        </div>

        <div className="marketplace">
          <div className="main-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-1 col-span-2">
              <div className="shoppify-section">
                <div className="display-toolbar">
                  <div className="showing text-2xl my-4">
                    Steam Cleaners (13)
                  </div>
                  <div className="tool-bar-mode bg-gray-200 py-4 px-4 lg:hidden my-6">
                    <button
                      className="flex font-bold"
                      onClick={openFilterModal}
                    >
                      <img src={dropdown} className="w-6 mr-2" alt="" />
                      Filter
                    </button>{" "}
                  </div>
                </div>

                <div className="product-grid  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <div className="collection-product" key={product.id}>
                      <div className="grid-item relative">
                      <Link to={`/ProductPage`} className="block group rounded-lg p-2">

                          <img
                            src={product.image}
                            alt={product.name}
                            className="product-image w-full h-40 object-cover"
                          />
                          <div className="absolute bottom-16 left-0 right-0 z-50 bg-green-700 text-white p-2  opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            Add to Cart
                          </div>
                          <div className="product-name text-lg font-semibold mt-2">
                            {product.name}
                          </div>
                          <div className="product-price text-gray-700">
                            {product.price}
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-2 hidden lg:block">
              <div className="filter-section  h-3/4 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Price Filter</h3>
                <div className="filter-options space-y-2 border-b-2 pb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="priceFilter"
                      value=""
                      checked={priceFilter === ""}
                      onChange={() => setPriceFilter("")}
                      className="mr-2"
                    />
                    All
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="priceFilter"
                      value="0-49"
                      checked={priceFilter === "0-49"}
                      onChange={() => setPriceFilter("0-49")}
                      className="mr-2"
                    />
                    $0 - $49
                  </label>
                  {/* Add Tailwind CSS classes for other price options as well */}
                </div>
                <h3 className="text-lg font-semibold my-4">Size Filter</h3>
                <div className="filter-options space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="sizeFilter"
                      value="X"
                      checked={sizeFilter.includes("X")}
                      onChange={() => toggleSizeFilter("X")}
                      className="mr-2"
                    />
                    X
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="sizeFilter"
                      value="XS"
                      checked={sizeFilter.includes("XS")}
                      onChange={() => toggleSizeFilter("XS")}
                      className="mr-2"
                    />
                    XS
                  </label>
                  {/* Add Tailwind CSS classes for other size options as well */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFilterModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white h-full w-full z-10 p-4 rounded-lg">
            <button className="text-red-500" onClick={closeFilterModal}>
              Close
            </button>
            <div className="filter-section h-3/4 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Price Filter</h3>
              <div className="filter-options space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceFilter"
                    value=""
                    checked={priceFilter === ""}
                    onChange={() => setPriceFilter("")}
                    className="mr-2"
                  />
                  All
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceFilter"
                    value="0-49"
                    checked={priceFilter === "0-49"}
                    onChange={() => setPriceFilter("0-49")}
                    className="mr-2"
                  />
                  $0 - $49
                </label>
                {/* Add Tailwind CSS classes for other price options as well */}
              </div>
              <h3 className="text-lg font-semibold my-4">Size Filter</h3>
              <div className="filter-options space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="sizeFilter"
                    value="X"
                    checked={sizeFilter.includes("X")}
                    onChange={() => toggleSizeFilter("X")}
                    className="mr-2"
                  />
                  X
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="sizeFilter"
                    value="XS"
                    checked={sizeFilter.includes("XS")}
                    onChange={() => toggleSizeFilter("XS")}
                    className="mr-2"
                  />
                  XS
                </label>
                {/* Add Tailwind CSS classes for other size options as well */}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
