import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";   
import { FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

const CartDrawer = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();
  const handleClose = () => {
    onClose();
    navigate("/");    
  };

  return (
    <div 
      className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl p-8 z-50 transition-transform transform scale-100 hover:scale-105 rounded-l-2xl"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >

      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-800">My Bag</h2>
        <button 
          onClick={handleClose} 
          className="text-gray-600 hover:text-red-500 transition duration-300"
        >
          <FiX size={28} />
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="mt-8 text-center">
          <p className="text-gray-700 text-lg">Your bag is empty!</p>
          <Link 
            to="/" 
            className="text-[#FF3E6C] hover:text-[#D32F5D] transition duration-300 underline"
          >
            🛍️ Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="max-h-96 overflow-y-auto">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex justify-between items-center bg-gray-50 rounded-lg shadow-md p-4 mb-4 transition hover:shadow-lg"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                </div>

                <div className="flex items-center space-x-3">

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-[#FF3E6C] text-white px-3 py-2 rounded-full hover:bg-[#D32F5D] transition duration-300"
                  >
                    <FiPlus size={18} />
                  </button>

                  <span className="text-lg font-bold">{item.quantity}</span>

                  <button
                    onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}  
                    className={`bg-[#FFA500] text-white px-3 py-2 rounded-full transition duration-300 
                      ${item.quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FF8C00]"}`}
                    disabled={item.quantity === 1}  
                  >
                    <FiMinus size={18} />
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                  >
                    <FiTrash2 size={22} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: ${totalPrice}
            </h3>
          </div>
        </>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={handleClose}
          className="bg-[#FF3E6C] text-white px-6 py-3 rounded-full hover:bg-[#D32F5D] transition duration-300 shadow-lg w-1/2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
