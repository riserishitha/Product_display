import React from "react";
import { FaShippingFast, FaCartPlus, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaSmile } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">ERA</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Era</strong> is your go-to e-commerce platform, offering a seamless 
            shopping experience. We make online shopping effortless and enjoyable.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">🚀 Our Mission & Values</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to provide a smooth and reliable shopping experience through 
            cutting-edge technology. We prioritize speed, accuracy, and customer satisfaction, 
            ensuring you get the best service every time you shop with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            
            <div className="text-center">
              <FaShippingFast className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">Fast Checkout</h3>
              <p className="text-gray-600">Quick and secure checkout process.</p>
            </div>

            <div className="text-center">
              <FaCartPlus className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">Dynamic Cart</h3>
              <p className="text-gray-600">Real-time cart updates with API integration.</p>
            </div>

            <div className="text-center">
              <FaSmile className="text-blue-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">User-Friendly</h3>
              <p className="text-gray-600">Simple and intuitive shopping experience.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">🔥 Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-700">Cart Management</h3>
              <p className="text-gray-600">Dynamic cart with add/remove functionality.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-700">Responsive Design</h3>
              <p className="text-gray-600">Fully responsive layout for all devices.</p>
            </div>

          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">💬 Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Adding products to the cart is so smooth and easy! Loved the real-time updates."
              </p>
              <h4 className="mt-4 text-green-700 font-bold">– Ananya P.</h4>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Seamless checkout experience with fast order confirmation. Highly recommended!"
              </p>
              <h4 className="mt-4 text-green-700 font-bold">– Rahul K.</h4>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Real-time cart updates make shopping so much more efficient!"
              </p>
              <h4 className="mt-4 text-green-700 font-bold">– Priya R.</h4>
            </div>

          </div>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">📞 Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-green-600 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-gray-600">456 Tech Avenue, Bangalore, India</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-600">support@shopease.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaPhoneAlt className="text-red-600 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
