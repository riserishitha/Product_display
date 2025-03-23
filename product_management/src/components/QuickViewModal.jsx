import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FiX, FiCheckCircle } from "react-icons/fi";

const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);

    // Hide popup and navigate to home after 1.5 seconds
    setTimeout(() => {
      setShowPopup(false);
      navigate("/"); // Redirect to homepage
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gradient-to-br from-[#D1D9E6] to-[#7EC8E3] p-8 rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 relative transition-transform transform scale-100 hover:scale-105">

        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <button 
            onClick={onClose} 
            className="text-[#4CA1AF] hover:text-red-500 transition duration-300"
          >
            <FiX size={28} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          />

          {/* Product Details */}
          <div className="text-gray-800">
            <p className="text-lg font-semibold">{product.brand}</p>
            <p className="text-[#4CA1AF] font-bold text-2xl mt-2">₹{product.price}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>

            {/* Reviews */}
            <h3 className="mt-6 text-xl font-bold">Reviews:</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {product.reviews.map((review, index) => (
                <li key={index} className="mt-1">
                  ⭐ {review}
                </li>
              ))}
            </ul>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-[#4CA1AF] text-white px-6 py-3 rounded-full hover:bg-[#2B7A78] transition duration-300 shadow-lg flex items-center justify-center"
            >
              🛒 Add to Bag
            </button>
          </div>
        </div>

        {/* Popup Notification */}
        {showPopup && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#4CA1AF] text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50">
            <FiCheckCircle size={22} />
            <span>✅ Successfully Added to Bag!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickViewModal;
