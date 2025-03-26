import React, { useState } from "react";
import { FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { isAuthenticated, loginRedirect } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [showAuthAlert, setShowAuthAlert] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    if (isAuthenticated) {
      addToCart(product);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        onClose();
      }, 1500);
    } else {
      setShowAuthAlert(true);
      setTimeout(() => {
        setShowAuthAlert(false);
        loginRedirect();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div 
        className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-4xl transition-transform transform scale-100 hover:scale-105"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700 transition">
            <FiX size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">{product.brand}</p>
              <p className="text-xl text-[#FF3E6C] font-bold mt-2">${product.price}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-700 text-sm">{product.description}</p>

              {product.reviews && product.reviews.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Customer Reviews:</h3>
                  <ul className="space-y-2">
                    {product.reviews.map((review, index) => (
                      <li 
                        key={index} 
                        className="bg-gray-100 p-2 rounded-lg shadow-sm text-sm"
                      >
                        ⭐ {review}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-4 w-full bg-[#FF3E6C] text-white py-2 rounded-full hover:bg-[#D32F5D] transition text-sm"
            >
              🛒 Add to Bag
            </button>
          </div>
        </div>

        {showPopup && (
          <div className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-center">
            <FiCheckCircle className="mr-2" />
            Added to Cart!
          </div>
        )}

        {showAuthAlert && (
          <div className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center justify-center">
            <FiAlertCircle className="mr-2" />
            Please log in or sign up!
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickViewModal;
