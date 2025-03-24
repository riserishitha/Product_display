import React, { useState } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div 
        className="bg-white p-8 rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 transition-transform transform scale-100 hover:scale-105"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700 transition">
            <FiX size={32} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />

          <div className="flex flex-col justify-between">
            
            <div>
              <p className="text-lg font-semibold">{product.brand}</p>
              <p className="text-3xl text-[#FF3E6C] mt-2">${product.price}</p>
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>

            {product.reviews && product.reviews.length > 0 && (
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-3">Customer Reviews:</h3>
                <ul className="space-y-2">
                  {product.reviews.map((review, index) => (
                    <li 
                      key={index} 
                      className="bg-gray-100 p-3 rounded-lg shadow-sm"
                    >
                      ⭐ {review}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-[#FF3E6C] text-white py-3 rounded-full hover:bg-[#D32F5D] transition"
            >
              🛒 Add to Bag
            </button>
          </div>
        </div>

        {showPopup && (
          <div className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md">
            <FiCheckCircle className="inline-block mr-2" />
            Added to Cart!
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickViewModal;
