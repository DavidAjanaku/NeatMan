import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white pt-10 pb-20 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h3 className="text-xl font-semibold">Information</h3>
          <ul className="mt-2">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Help Center</li>
            <li>Our Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h3 className="text-xl font-semibold">Services</h3>
          <ul className="mt-2">
            <li>FAQ</li>
            <li>Orders & Returns</li>
            <li>Shipping Rates & Policies</li>
            <li>International Shipping</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h3 className="text-xl font-semibold">Your Account</h3>
          <ul className="mt-2">
            <li>Your Orders</li>
            <li>Your Wishlist</li>
            <li>Payment Methods</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="mt-2">
            Subscribe to our newsletter for updates and special offers.
          </p>
        </div>
      </div>
    </footer>
  );
}
