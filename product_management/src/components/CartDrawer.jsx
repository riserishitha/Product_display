// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

// const CartDrawer = ({ onClose }) => {
//   const navigate = useNavigate();
  
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
//     if (currentUser) {
//       const userCart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`)) || [];
//       setCart(userCart);
//     } else {
//       setCart([]);
//     }

//     calculateTotal();
//   }, []);

//   const calculateTotal = () => {
//     const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     setTotalPrice(total);
//   };

//   const saveCart = (updatedCart) => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (currentUser) {
//       localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(updatedCart));
//     }
//   };

//   const increaseQuantity = (itemId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updatedCart);
//     saveCart(updatedCart);
//     calculateTotal();
//   };

//   // ✅ Decrease Quantity
//   const decreaseQuantity = (itemId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === itemId && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCart(updatedCart);
//     saveCart(updatedCart);
//     calculateTotal();
//   };

//   // ✅ Remove Item
//   const removeFromCart = (itemId) => {
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);
//     saveCart(updatedCart);
//     calculateTotal();
//   };

//   // ✅ Handle Close and Redirect to Home
//   const handleClose = () => {
//     onClose();
//     navigate("/");
//   };

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//         onClick={handleClose}
//       ></div>

//       {/* Cart Drawer */}
//       <div
//         className="fixed inset-y-0 right-0 w-full sm:w-4/5 md:w-3/5 lg:w-96 bg-white shadow-2xl p-6 z-50 transition-transform transform scale-100 hover:scale-105 rounded-l-2xl"
//         style={{ fontFamily: "'Outfit', sans-serif" }}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4 border-b pb-3">
//           <h2 className="text-xl md:text-2xl font-bold text-gray-800">My Bag</h2>
//           <button
//             onClick={handleClose}
//             className="text-gray-600 hover:text-red-500 transition duration-300"
//           >
//             <FiX size={24} />
//           </button>
//         </div>

//         {/* Empty Cart Message */}
//         {cart.length === 0 ? (
//           <div className="mt-8 text-center">
//             <p className="text-gray-700 text-lg">Your bag is empty!</p>
//             <Link
//               to="/"
//               className="text-[#FF3E6C] hover:text-[#D32F5D] transition duration-300 underline"
//             >
//               🛍️ Continue Shopping
//             </Link>
//           </div>
//         ) : (
//           <>
//             {/* Cart Items */}
//             <div className="max-h-96 overflow-y-auto space-y-4">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center bg-gray-50 rounded-lg shadow-md p-3 transition hover:shadow-lg"
//                 >
//                   {/* Product Image */}
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover rounded-lg mr-3"
//                   />

//                   {/* Product Details */}
//                   <div className="flex-1">
//                     <p className="text-sm md:text-base font-semibold text-gray-800">
//                       {item.name}
//                     </p>
//                     <p className="text-gray-600 text-xs md:text-sm">
//                       ${item.price} x {item.quantity}
//                     </p>
//                   </div>

//                   {/* Quantity Controls */}
//                   <div className="flex items-center space-x-1">
//                     <button
//                       onClick={() => decreaseQuantity(item.id)}
//                       className={`bg-[#FFA500] text-white px-2 py-2 rounded-full transition duration-300 
//                         ${item.quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FF8C00]"}`}
//                       disabled={item.quantity === 1}
//                     >
//                       <FiMinus size={16} />
//                     </button>

//                     <span className="text-sm md:text-lg font-bold">
//                       {item.quantity}
//                     </span>

//                     <button
//                       onClick={() => increaseQuantity(item.id)}
//                       className="bg-[#FF3E6C] text-white px-2 py-2 rounded-full hover:bg-[#D32F5D] transition duration-300"
//                     >
//                       <FiPlus size={16} />
//                     </button>

//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-500 hover:text-red-700 transition duration-300"
//                     >
//                       <FiTrash2 size={20} />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Total Price */}
//             <div className="mt-6 border-t pt-4">
//               <h3 className="text-xl md:text-2xl font-bold text-gray-800">
//                 Total: ${totalPrice}
//               </h3>
//             </div>
//           </>
//         )}

//         {/* Close Button */}
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={handleClose}
//             className="bg-[#FF3E6C] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#D32F5D] transition duration-300 shadow-lg w-3/4 md:w-1/2 text-sm md:text-base"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartDrawer;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

const CartDrawer = ({ onClose }) => {
  const navigate = useNavigate();
  
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userName, setUserName] = useState("");  // ✅ Added user name state

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      const userCart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`)) || [];
      setCart(userCart);
      setUserName(currentUser.name || "Guest");  // ✅ Set the user's name
    } else {
      setCart([]);
      setUserName("Guest");
    }
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  const saveCart = (updatedCart) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(updatedCart));
    }
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={handleClose}
      ></div>

      {/* Cart Drawer */}
      <div
        className="fixed inset-y-0 right-0 w-full sm:w-4/5 md:w-3/5 lg:w-96 bg-white shadow-2xl p-6 z-50 transition-transform transform scale-100 hover:scale-105 rounded-l-2xl"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">My Bag</h2>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-red-500 transition duration-300"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* ✅ Display User Name */}
        {cart.length > 0 && (
          <div className="text-center mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
              Hello, <span className="text-[#FF3E6C]">{userName}!</span> 👋
            </h3>
          </div>
        )}

        {/* Empty Cart Message */}
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
            {/* Cart Items */}
            <div className="max-h-96 overflow-y-auto space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-gray-50 rounded-lg shadow-md p-3 transition hover:shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg mr-3"
                  />

                  <div className="flex-1">
                    <p className="text-sm md:text-base font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className={`bg-[#FFA500] text-white px-2 py-2 rounded-full transition duration-300 
                        ${item.quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FF8C00]"}`}
                      disabled={item.quantity === 1}
                    >
                      <FiMinus size={16} />
                    </button>

                    <span className="text-sm md:text-lg font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-[#FF3E6C] text-white px-2 py-2 rounded-full hover:bg-[#D32F5D] transition duration-300"
                    >
                      <FiPlus size={16} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="mt-6 border-t pt-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Total: ${totalPrice}
              </h3>
            </div>
          </>
        )}

        {/* Close Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleClose}
            className="bg-[#FF3E6C] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#D32F5D] transition duration-300 shadow-lg w-3/4 md:w-1/2 text-sm md:text-base"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
