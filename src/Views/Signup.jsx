import React from "react";
import Header from "../Components/Navigation/Header";
import Hamburger from "../Components/Navigation/Hamburger";
import { Link } from "react-router-dom";
import rightArrow from "../assets/line-angle-right-icon.svg";

export default function Signup() {
  return (
    <div>
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

          <div className="main-content">
            <div className="main-container md:w-3/4 my-20 mx-auto">
              <div>
                <div className="login-page">
                  <h1 className="text-center text-3xl my-5">Create an Account</h1>

                  <div className="login-wr">
                    <div className="content-login md:w-2/5 mx-auto">
                      <form action="">
                      <div className="mb-4">
                          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="text"
                            name="text"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                          Last Name
                          </label>
                          <input
                            type="text"
                            id="text"
                            name="text"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          />
                        </div>

                       

                        <button
                          type="submit"
                          className="bg-green-800 text-white rounded-md p-2 w-full font-medium text-lg"
                        >
                          Sign In
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
