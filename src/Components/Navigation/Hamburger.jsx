import React, { useState } from "react";
import profileIcon from "../../assets/profile-girl-icon.png";
import searchIcon from "../../assets/search-line-icon.png";
import shoppingCartIcon from "../../assets/shopping-cart-icon.png";
import HamburgerMenu from "react-hamburger-menu";
import closeX from "../../assets/close-line-icon.svg";
import dropdown from "../../assets/line-angle-down-icon.svg";

export default function Hamburger() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartCount = 5;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDropdown = (event) => {
    event.target.nextElementSibling.classList.toggle("hidden");
  };

  return (
    <div>
      <div className="md:hidden">
        <div className="header-inner mt-3">
          <div className="row flex flex-col">
            <div className="flex  items-center">
              <div className="flex  space-x-4 items-center">
                <div className="hamburger-menu" onClick={toggleModal}>
                  <HamburgerMenu
                    isOpen={isModalOpen}
                    menuClicked={toggleModal}
                    width={20}
                    height={20}
                    strokeWidth={2}
                    rotate={0}
                    color="black"
                    borderRadius={0}
                    animationDuration={0.5}
                  />
                </div>
                <img src={searchIcon} className="w-7 h-7" alt="" />
              </div>
              <div className="logo-container text-2xl uppercase font-semibold w-3/4 text-center">
                Neatman
              </div>

              <div className="flex w-3/12 justify-end">
                <img src={profileIcon} className="w-7 h-7" alt="" />
                <div className="header-cart-container flex ">
                  <div className="top-currency"></div>
                  <div className="header-cart relative">
                    <img
                      src={shoppingCartIcon}
                      className="w-7 h-7 cursor-pointer"
                      alt=""
                    />
                    {cartCount > 0 && (
                      <span className="cart-count absolute -top-3 -right-3 bg-green-500 text-white rounded-full w-3 h-3 p-3 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-30 flex items-center justify-center">
          <div
            className={`modal-overlay absolute inset-0 ${
              isModalOpen ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          ></div>
          <div className="modal-container absolute pt-20 left-0 w-2/3 h-screen bg-white p-4 transform transition-transform">
            <button onClick={toggleModal} className="mb-10">
              <img src={closeX} className="w-4" alt="" />
            </button>
            <div className="sidebar">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    onClick={toggleDropdown}
                    className="group hover:bg-gray-100 flex items-center"
                  >
                    Shop <img src={dropdown} className="w-3 ml-2" alt="" />
                  </a>
                  <ul className="dropdown hidden">
                    <li>
                      <a href="#">Shop Item 1</a>
                    </li>
                    <li>
                      <a href="#">Shop Item 2</a>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    onClick={toggleDropdown}
                    className="group hover:bg-gray-100 flex items-center"
                    
                  >
                    Products  <img src={dropdown} className="w-3 ml-2" alt="" />
                  </a>
                  <ul className="dropdown hidden">
                    <li>
                      <a href="#">Product Item 1</a>
                    </li>
                    <li>
                      <a href="#">Product Item 2</a>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    onClick={toggleDropdown}
                    className="group hover:bg-gray-100 flex items-center"
                  >
                    Pages  <img src={dropdown} className="w-3 ml-2" alt="" />
                  </a>
                  <ul className="dropdown hidden">
                    <li>
                      <a href="#">Page 1</a>
                    </li>
                    <li>
                      <a href="#">Page 2</a>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    onClick={toggleDropdown}
                    className="group hover:bg-gray-100  flex items-center"
                  >
                    Categories  <img src={dropdown} className="w-3 ml-2" alt="" />
                  </a>
                  <ul className="dropdown hidden">
                    <li>
                      <a href="#">Category 1</a>
                    </li>
                    <li>
                      <a href="#">Category 2</a>
                    </li>
                    <li>
                      <a href="#">Category 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="custom-content mt-5 absolute bottom-48">
              <p className="text-gray-600">
                <strong>Customer Service:</strong> 84-123-456-789
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
