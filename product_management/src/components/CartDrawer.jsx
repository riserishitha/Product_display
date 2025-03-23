// import React from "react";
// import { useCart } from "../context/CartContext";
// import { Link, useNavigate } from "react-router-dom";   // ✅ Import `useNavigate`

// const CartDrawer = ({ onClose }) => {
//   const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
//   const navigate = useNavigate();   // ✅ Create navigate function

//   // ✅ Close and navigate to Home
//   const handleClose = () => {
//     onClose();
//     navigate("/");    // Navigate to the home page
//   };

//   return (
//     <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg p-6">
//       <h2 className="text-xl font-bold">My Bag</h2>

//       {cart.length === 0 ? (
//         <div className="mt-4 text-center">
//           <p>Your bag is empty!</p>
//           <Link to="/" className="text-blue-500 hover:underline">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between items-center mt-4">
//               <div>
//                 <p className="font-bold">{item.name}</p>
//                 <p>${item.price} x {item.quantity}</p>
//               </div>

//               <div className="flex items-center">
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="px-2 bg-green-400 text-white"
//                 >
//                   +
//                 </button>
//                 <span className="px-4">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   className="px-2 bg-red-400 text-white"
//                 >
//                   -
//                 </button>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="ml-4 text-red-500"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           <h3 className="text-lg font-bold mt-4">Total: ${totalPrice}</h3>
//         </>
//       )}

//       <button
//         onClick={handleClose}    // ✅ Close and navigate
//         className="bg-red-500 text-white px-4 py-2 mt-4"
//       >
//         Close
//       </button>
//     </div>
//   );
// };

// export default CartDrawer;
import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";   
import { FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

const CartDrawer = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  // Close and navigate to Home
  const handleClose = () => {
    onClose();
    navigate("/");    
  };

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-gradient-to-br from-[#D1D9E6] to-[#7EC8E3] shadow-2xl p-8 z-50 transition-transform transform scale-100 hover:scale-105">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">My Bag</h2>
        <button 
          onClick={handleClose} 
          className="text-[#4CA1AF] hover:text-red-500 transition duration-300"
        >
          <FiX size={28} />
        </button>
      </div>

      {/* Empty Cart Message */}
      {cart.length === 0 ? (
        <div className="mt-8 text-center">
          <p className="text-gray-700 text-lg">Your bag is empty!</p>
          <Link 
            to="/" 
            className="text-[#4CA1AF] hover:text-[#2B7A78] transition duration-300 underline"
          >
            🛍️ Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="max-h-96 overflow-y-auto">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-4 transition hover:shadow-lg"
              >
                {/* Product Info */}
                <div>
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                </div>

                {/* Quantity & Remove Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-[#4CA1AF] text-white px-3 py-2 rounded-full hover:bg-[#2B7A78] transition duration-300"
                  >
                    <FiPlus size={18} />
                  </button>

                  <span className="text-lg font-bold">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-[#FF6347] text-white px-3 py-2 rounded-full hover:bg-[#FF4500] transition duration-300"
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

          {/* Total Price */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: ₹{totalPrice}
            </h3>
          </div>
        </>
      )}

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="w-full bg-[#4CA1AF] text-white px-6 py-3 mt-6 rounded-full hover:bg-[#2B7A78] transition duration-300 shadow-lg flex items-center justify-center"
      >
        ✖️ Close
      </button>
    </div>
  );
};

export default CartDrawer;
