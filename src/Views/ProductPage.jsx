import React, { useState } from "react";
import Header from "../Components/Navigation/Header";
import Hamburger from "../Components/Navigation/Hamburger";
import RelatedProducts from "../Components/RelatedProducts";
import Footer from "../Components/Navigation/Footer";

export default function ProductPage() {
  const [mainImage, setMainImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/HematitaEZ.jpg"
  );

  const otherImages = [
    "https://geologyscience.com/wp-content/uploads/2019/03/Iron-Ore-Lumps.jpeg",
    "https://paukwa.or.ke/wp-content/uploads/2020/10/iron-Image-credit-istockphoto.jpg",
    "https://mineralseducationcoalition.org/wp-content/uploads/Iron3_magnetite_353301656.jpg",
  ];

  const ironOreInfo = [
    {
      name: "Iron Ore 1",
      image: otherImages[0],
    },
    {
      name: "Iron Ore 2",
      image: otherImages[1],
    },
    {
      name: "Iron Ore 3",
      image: otherImages[2],
    },
  ];

  const tabData = {
    description: {
      label: "DESCRIPTION",
      content: (
        <p className="text-slate-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          expedita exercitationem quis odio perspiciatis placeat veniam. Ad ipsum,
          cum accusamus libero recusandae quasi quisquam, natus omnis laborum
          laudantium commodi ut.
        </p>
      ),
    },
    reviews: {
      label: "REVIEWS",
      content: <p className="text-slate-500">Reviews content goes here.</p>,
    },
    customTab1: {
      label: "SPECIFICATIONS 1",
      content: (
        <p className="text-slate-500">Custom Tab 1 content goes here.</p>
      ),
    },
    customTab2: {
      label: "SPECIFICATIONS 2",
      content: (
        <p className="text-slate-500">Custom Tab 2 content goes here.</p>
      ),
    },
  };

  const handleInquirySubmit = (event) => {
    event.preventDefault();
    // You can submit the data to the console
    console.log("Inquiry message:", inquiryMessage);

    // Show a popup message
    setShowMessage(true);

    // Reset the message field
    setInquiryMessage("");

    // You can also send the inquiry data to your backend for further processing
    // Example: fetch('/api/inquiries', { method: 'POST', body: JSON.stringify({ message: inquiryMessage }) });
  };
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [inquiryMessage, setInquiryMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // Define the handleImageClick function
  const handleImageClick = (imageSrc) => {
    // Set the clicked image as the main image
    setMainImage(imageSrc);
  };

  const handleWeightChange = (event) => {
    const newWeight = parseFloat(event.target.value);
    setSelectedWeight(newWeight);
  };

  const calculatePrice = () => {
    const basePrice = 4000; // Replace with your base price

    // Check if selectedWeight is a valid number; otherwise, default to 1 kg
    const weight = isNaN(selectedWeight) ? 1 : parseFloat(selectedWeight);

    return basePrice * weight;
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
                  className="w-full h-80 object-contain"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="flex flex-wrap space-x-2 gap-2 ">
                {ironOreInfo.map((ore, index) => (
                  <img
                    key={index}
                    src={ore.image}
                    alt={ore.name}
                    onClick={() => handleImageClick(ore.image)}
                    className="w-14 md:w-32 border cursor-pointer transform transition-transform hover:scale-105"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="product-shop md:my-14 md:w-2/4">
            <div>
              <div className="fixed-product">
                <div className="product-title">
                  <h1 className="text-3xl">Iron Ore</h1>
                </div>
              </div>
              <section>
                <form onSubmit={handleInquirySubmit}>
                  <div className="mt-4">
                    <label
                      htmlFor="inquiryInput"
                      className="block text-sm text-gray-600"
                    >
                      Make an Inquiry:
                    </label>
                    <textarea
                      type="text"
                      id="inquiryInput"
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full my-2 p-2"
                      required
                    />
                  </div>

                  <div className="w-full mt-4">
                    <button
                      type="submit"
                      className="bg-green-800 w-full uppercase text-white px-4 py-2"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </section>
              {showMessage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
                  <div className="bg-white p-4 rounded shadow-lg">
                    <p>
                      Your message has been sent successfully! You can expect a response within the next 24 hours.
                    </p>
                    <button onClick={() => setShowMessage(false)} className="mt-5 bg-green-700 p-4 text-white">Close</button>
                  </div>
                </div>
              )}
              <section className="tabs mt-32">
                <div className="flex flex-wrap text-sm md:border-b-2 ">
                  {Object.keys(tabData).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => handleTabClick(tabKey)}
                      className={`tab-button ${
                        activeTab === tabKey ? "active-tab bg-green-600 text-white" : ""
                      } py-2 px-4 focus:outline-none`}
                    >
                      {tabData[tabKey].label}
                    </button>
                  ))}
                </div>
                <div className="p-4">{tabData[activeTab].content}</div>
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
