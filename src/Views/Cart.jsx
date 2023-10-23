import React from "react";
import Header from "../Components/Navigation/Header";
import Hamburger from "../Components/Navigation/Hamburger";
import { Link } from "react-router-dom";
import ShippingEstimates from "../Components/ShippingEstimates";
import rightArrow from "../assets/line-angle-right-icon.svg"

export default function Cart() {
  const cartItems = [
    {
      name: "Product 1",
      quantity: 3,
      price: "$49.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-9_1676fffd-aa97-4561-8854-a5303bca7909_compact.jpg?v=1492508547",
    },
    {
      name: "Product 2",
      quantity: 5,
      price: "$29.99",
      image:
        "https://cleversoft-handyman.myshopify.com/cdn/shop/products/product-handy-9_1676fffd-aa97-4561-8854-a5303bca7909_compact.jpg?v=1492508547",
    },
    // Add more items as needed
  ];

  // Calculate the total quantity in the cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="md:w-[90%] md:mx-auto p-4">
        <div>
          <Header />
          <Hamburger />
        </div>
        <div className="clearfix py-10 bg-slate-200 my-2 p-10">
          <div className="breadcrumb">
            <div className="breadcrumb__position flex items-center">
              <Link to="/" className="text-sm">Home</Link>
              <span className="mx-4"><img src={rightArrow} className="w-2" alt="" /></span>
              <strong className="font-light text-sm">Your Shopping Cart</strong>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="cart">
            <h1 className="text-center text-4xl my-8 font-light">My Cart</h1>
            <div className="table-container">
              {totalQuantity > 0 ? (
                <div>
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
                  <div className="flex justify-between my-4">
                    <Link to="/" className="bg-green-500 text-white py-2 px-4 rounded">
                      CONTINUE SHOPPING
                    </Link>
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded">
                      CLEAR SHOPPING CART
                    </button>
                  </div>
                  <ShippingEstimates />
               
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl">YOUR CART IS EMPTY!</h2>
                  <p>You have no items in your shopping cart.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
