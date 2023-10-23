import React from "react";
import Header from "../Components/Navigation/Header";
import Hamburger from "../Components/Navigation/Hamburger";
import { Link } from "react-router-dom";
import ShippingEstimates from "../Components/ShippingEstimates";

export default function Cart() {
  const cartItems = [
    {
      name: "Product 1",
      quantity: 3,
      price: "$49.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-9_1676fffd-aa97-4561-8854-a5303bca7909_compact.jpg?v=1492508547", // Replace with actual image URL
    },
    {
      name: "Product 2",
      quantity: 5,
      price: "$29.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-9_1676fffd-aa97-4561-8854-a5303bca7909_compact.jpg?v=1492508547", // Replace with actual image URL
    },
    // Add more items as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="md:w-[90%] md:mx-auto p-4">
      <div>
        <Header />
        <Hamburger />
      </div>
      <div className="clearfix py-10 bg-slate-300 my-2 p-2">
        <div className="breadcrumb">
          <div className="breadcrumb__position">
            <Link to="/">Home</Link>
            <span className=" mx-4">></span>
            <strong className="font-light">Your Shopping Cart</strong>
          </div>
        </div>
      </div>
  
      <div className="main-content">
        <div className="cart">
          <h1 className="text-center text-4xl my-8">My Cart</h1>
          <div className="table-container">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-start">PRODUCT</th>
                  <th className="px-4 py-2">QTY</th>
                  <th className="px-4 py-2">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="border-t-2">
                    <td className="px-4 py-2">
                      <div className="flex items-center justify-between">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-28 h-28 mr-4 object-cover"
                        />
                        {item.name}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center">{item.quantity}</td>
                    <td className="px-4 py-2 text-center">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ShippingEstimates/>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
