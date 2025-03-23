import React from "react";
import { FaShippingFast, FaRegStar, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaSmile } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">        

        {/* ✅ Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">🛒 About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At <strong>UrbanEssence</strong>, we strive to provide a seamless and enjoyable online shopping 
            experience. From fashion to electronics, home decor to beauty products, we offer a diverse range 
            of high-quality items at competitive prices.
          </p>
        </div>

        {/* ✅ Our Mission & Values Section */}
        <div className="bg-white shadow-md rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">🚀 Our Mission & Values</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to become your go-to e-commerce platform by delivering superior products with 
            unbeatable service. We prioritize convenience, reliability, and customer satisfaction 
            at every step.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            
            <div className="text-center">
              <FaShippingFast className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">Fast Delivery</h3>
              <p className="text-gray-600">Enjoy quick and reliable shipping services.</p>
            </div>

            <div className="text-center">
              <FaRegStar className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">Top Quality</h3>
              <p className="text-gray-600">We guarantee the best products from trusted brands.</p>
            </div>

            <div className="text-center">
              <FaSmile className="text-blue-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">Customer Happiness</h3>
              <p className="text-gray-600">Your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>

        {/* ✅ What We Offer Section */}
        <div className="bg-gray-100 rounded-lg shadow-md p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">🔥 What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <img src="https://via.placeholder.com/150" alt="Fashion" className="mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-gray-700">Fashion</h3>
              <p className="text-gray-600">Trendy clothing, accessories, and footwear.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <img src="https://via.placeholder.com/150" alt="Electronics" className="mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-gray-700">Electronics</h3>
              <p className="text-gray-600">Latest gadgets and tech essentials.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <img src="https://via.placeholder.com/150" alt="Home Decor" className="mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-gray-700">Home Decor</h3>
              <p className="text-gray-600">Stylish furniture and decor items.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
              <img src="https://via.placeholder.com/150" alt="Beauty" className="mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-gray-700">Beauty & Wellness</h3>
              <p className="text-gray-600">Skincare, cosmetics, and wellness products.</p>
            </div>

          </div>
        </div>

        {/* ✅ Customer Reviews Section */}
        <div className="bg-white shadow-md rounded-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">💬 Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Shopping at UrbanEssence has been a delight! Great products and timely delivery."
              </p>
              <h4 className="mt-4 text-green-700 font-bold">– Priya M.</h4>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Wide range of products and amazing customer service. Highly recommended!"
              </p>
              <h4 className="mt-4 text-green-700 font-bold">– Rahul K.</h4>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Quality products and reliable support team. My go-to e-commerce site!"
              </p>
              <h4 className="mt-4 text-green-700 font-bold">– Anjali R.</h4>
            </div>

          </div>
        </div>

        {/* ✅ Contact Section */}
        <div className="bg-gray-100 rounded-lg shadow-md p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">📞 Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-green-600 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-gray-600">456 E-commerce Avenue, Mumbai, India</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-600">support@urbanessence.com</p>
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
