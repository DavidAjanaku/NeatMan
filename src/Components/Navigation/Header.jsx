import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/profile-girl-icon.png";
import searchIcon from "../../assets/search-line-icon.png";
import shoppingCartIcon from "../../assets/shopping-cart-icon.png";
import arrowDownIcon from "../../assets/line-angle-down-icon.svg";
import CategoryNavigation from "./CategoryNavigation";
import cancelBtn from "../../assets/close-round-line-icon.svg"
import closeBtn from "../../assets/close-line-icon.svg"

const productsData = [
  {
    name: "Product 1",
    price: "$49.99",
    image:
      "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
  },
  {
    name: "Product 2",
    price: "$29.99",
    image:
      "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
  },
  {
    name: "Product 3",
    price: "$39.99",
    image:
      "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
  },
];



export default function Header() {
  const cartCount = 5; // Replace with your actual cart count
  const [cartVisible, setCartVisible] = useState(false);

  const openCart = () => {
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  const removeItemFromCart = (itemIndex) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);
  };
  const [cartItems, setCartItems] = useState([
    {
      name: "Product 1",
      price: "$49.99",
      image:
        "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: 3,
    },
    {
      name: "Product 2",
      price: "$49.99",
      image:
        "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: 33,
    },

    {
      name: "Product 3",
      price: "$49.99",
      image:
        "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: 5,
    },

    {
      name: "Product 4",
      price: "$49.99",
      image:
        "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: 9,
    },

    {
      name: "Product 4",
      price: "$49.99",
      image:
        "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: 9,
    },

    {
      name: "Product 4",
      price: "$49.99",
      image:
        "https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quantity: 9,
    },
  ]);
  return (
    <div>
      <div className="hidden md:block">
        <div className="header-inner mt-3">
          <div className="row flex flex-col">
            <div className="flex justify-between py-10">
              <div className="logo-container text-3xl uppercase font-semibold">
                Neatman
              </div>
              <div className="search-bar border w-3/5 px-5 p-2 bg-gray-200 rounded-full flex justify-between">
                <input
                  type="text"
                  placeholder="Search products"
                  className="outline-none bg-gray-200 w-full"
                />
                <img src={searchIcon} className="w-5 h-5" alt="" />
              </div>
              <div className="header-cart-container flex space-x-5">
                <div className="top-currency">
                  <img src={profileIcon} className="w-7 h-7" alt="" />
                </div>
                <div className="header-cart relative">
                  <img
                    src={shoppingCartIcon}
                    className="w-7 h-7 cursor-pointer"
                    alt=""
                    onClick={openCart}
                  />
                  {cartCount > 0 && (
                    <span className="cart-count absolute -top-3 -right-3 bg-green-500 text-white rounded-full w-3 h-3 p-3 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="menu-main-home flex justify-between bg-green-800 text-white px-4 py-4">
              <div className="menu-top">
                <ul className="navbar-nav flex space-x-10">
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer relative group">
                    <span>Shop</span>
                    <img src={arrowDownIcon} className="w-2 h-2 ml-1" alt="" />
                    <ul className="absolute text-black hidden mt-2 py-2 bg-white border border-gray-300 rounded shadow-lg group-hover:block top-4 z-10 p-4">
                      <li>
                        <Link to="/shop-category-1">Category 1</Link>
                      </li>
                      <li>
                        <Link to="/shop-category-2">Category 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer relative group">
                    <span>Products</span>
                    <img src={arrowDownIcon} className="w-2 h-2 ml-1" alt="" />
                    <div className="absolute absolute text-black hidden mt-2 py-2 bg-white border border-gray-300 rounded shadow-lg group-hover:block top-4 z-10 p-4 ">
                      <ul className="">
                        <div className="md:flex md:justify-between md:space-x-5 mt-7">
                          <div>
                            <ul className="font-normal">
                              <h1 className="font-medium"> SHOP</h1>
                              <li className="py-2">All Collections</li>
                              <li className="py-2">Our Favourites</li>
                              <li className="py-2">New Arrivals</li>
                            </ul>
                          </div>
                          {productsData.map((product, index) => (
                            <div key={index} className="mb-5">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-w-full md:w-64 md:h-auto object-cover"
                              />
                              <div>
                                <div className="font-semibold">
                                  {product.name}
                                </div>
                                <div className="text-gray-600">
                                  {product.price}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer relative group">
                    <span>Pages</span>
                    <img src={arrowDownIcon} className="w-2 h-2 ml-1" alt="" />
                    <ul className="absolute text-black hidden mt-2 py-2 bg-white border border-gray-300 rounded shadow-lg group-hover:block top-4 z-10 w-[500px] p-4">
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="menu-text-right">
                <div className="custom-content">
                  <strong>Customer Service</strong>: 84-123-456-789
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cartVisible && (
        <div className="fixed right-0 top-0 h-full w-full bg-opacity-75 bg-black z-50 "            
        >
          <div className="bg-white p-4 h-full w-[35%] absolute right-0  shadow-lg">
            <button
              onClick={closeCart}
              className="close-cart absolute top-5 right-5 text-red-500"
            >
             <img src={closeBtn} className="w-5" alt="" />
            </button>
            <div className="dropdown-cart mt-7">
              <div className="continue-shopping my-7">
                <span className="uppercase font-medium text-xl">my cart</span>
              </div>

              <div className="mini_cart_header">
                <ul className="cart-list h-[60vh] overflow-scroll example">
                  {cartItems.map((item, index) => (
                    <li className="item flex items-center my-4 border-b-[1px] pb-4" key={index}>
                      <Link to="/" className="w-28 h-28">
                        <img
                          src={item.image}
                          className="w-full h-full object-cover"
                          alt={item.name}
                        />
                      </Link>
                      <div className="product-inner space-y-3 w-full ml-4">
                        <div className="product-name">
                          <Link to="/" className="font-medium text-xl">{item.name}</Link>
                        </div>
                        <div className="option">
                          <div className="cart-collateral flex">
                            <span className="qty-cart text-slate-300 mr-4">
                              Qty: {item.quantity}
                            </span>
                            <div className="price font-light">{item.price}</div>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItemFromCart(index)}
                        className="remove-item ml-4 text-red-500"
                      >
                        <img src={cancelBtn} className="w-8" alt="" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
                      <hr />
              <div className="wrap-btcart flex flex-col">
                <div className="summary ">
                  <div className="total flex justify-between py-4 text-xl">
                    <div className="label">
                      Total:
                    </div>
                    <div className="price">
                      $1,700
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <div className="view-cart my-2">
                    <Link to="/Cart" className="flex justify-center border-2 p-3 uppercase">
                      View Cart
                    </Link>
                  </div>
                  <button className="flex mx-auto  w-full justify-center py-3 my-3 uppercase bg-green-800 text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
