import React, { useState } from 'react';

export default function ShippingEstimates() {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here.

    console.log('Submitted Data:', { country, state, zipCode, specialInstructions });
  };

  return (
    <div className=" p-6 bg-slate-200">
      <h2 className="text-2xl font-semibold mb-4">Get Shipping Estimates</h2>
      <form onSubmit={handleSubmit} className=''>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border  px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border  px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip/Postal Code</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="border  px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">Special Instructions</label>
          <textarea
            id="specialInstructions"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            className="border  px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-green-800 text-white  px-4 py-2  focus:outline-none"
        >
          Get Estimates
        </button>
      </form>
    </div>
  );
}
