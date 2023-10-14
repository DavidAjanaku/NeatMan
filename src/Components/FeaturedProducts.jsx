import React, { useState } from 'react';

// Sample product data for different categories
const products = {
  gold: [
    { name: 'Gold Product 1', price: 'N100', image: 'https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Gold Product 2', price: 'N150', image: 'https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Gold Product 3', price: 'N150', image: 'https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Gold Product 1', price: 'N100', image: 'https://images.pexels.com/photos/8105118/pexels-photo-8105118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ],
  silver: [
    { name: 'Silver Product 1', price: 'N50', image: '/silver-product-1.jpg' },
    { name: 'Silver Product 2', price: 'N75', image: '/silver-product-2.jpg' },
  ],
  bronze: [
    { name: 'Bronze Product 1', price: 'N20', image: '/bronze-product-1.jpg' },
    { name: 'Bronze Product 2', price: 'N30', image: '/bronze-product-2.jpg' },
  ],
};

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('gold');

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const handleAddToCart = (productName) => {
    // You can implement the logic to add the product to the cart here
    alert(`Added ${productName} to cart`);
  };

  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
      </div>
      <div className='bg-green-400 h-[1px] w-3/12 mx-auto mt-2'></div>
      <div className="flex justify-center mt-6">
        <div className="space-x-4">
          <button
            onClick={() => handleTabClick('gold')}
            className={`tab-button ${activeTab === 'gold' ? 'active' : ''}`}
          >
            Gold
          </button>
          <button
            onClick={() => handleTabClick('silver')}
            className={`tab-button ${activeTab === 'silver' ? 'active' : ''}`}
          >
            Silver
          </button>
          <button
            onClick={() => handleTabClick('bronze')}
            className={`tab-button ${activeTab === 'bronze' ? 'active' : ''}`}
          >
            Bronze
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products[activeTab].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 flex flex-col relative group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 right-0"
                >
                  <button
                    onClick={() => handleAddToCart(product.name)}
                    className="px-4 py-2 bg-green-500  text-white rounded hover:bg-green-600 w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <div className="text-lg font-normal">{product.name}</div>
                <div className="text-gray-600">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}