// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { FiShoppingBag, FiUser, FiPhone, FiHome, FiShoppingCart } from "react-icons/fi";

// const Navbar = () => {
//   const { cart } = useCart();

//   return (
//     <div className="bg-gray-100 min-h-screen">
      
//       {/* Navbar */}
//       <nav className="bg-gradient-to-r from-[#7EC8E3] via-[#4CA1AF] to-[#D1D9E6] text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center max-w-6xl">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img 
//               src="/logo.webp"  // Local logo file
//               alt="UrbanEssence Logo" 
//               className="w-12 h-12 rounded-full shadow-lg"
//             />
//             <span className="text-3xl font-bold tracking-wide text-gray-100">UrbanEssence</span>
//           </Link>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-6">
//             <Link to="/" className="flex items-center text-white hover:text-gray-200 transition">
//               <FiHome className="mr-1" /> Home
//             </Link>
//             <Link to="/about" className="flex items-center text-white hover:text-gray-200 transition">
//               <FiUser className="mr-1" /> About Us
//             </Link>
//             <Link to="/contact" className="flex items-center text-white hover:text-gray-200 transition">
//               <FiPhone className="mr-1" /> Contact Us
//             </Link>
//             <Link to="/products" className="flex items-center text-white hover:text-gray-200 transition">
//               <FiShoppingBag className="mr-1" /> Products
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className="relative">
//               <button className="flex items-center bg-white text-[#4CA1AF] px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
//                 <FiShoppingCart className="mr-2" />
//                 My Bag
//                 <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
//                   {cart.length}
//                 </span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiShoppingBag, FiUser, FiPhone, FiHome, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="bg-gradient-to-r from-[#7EC8E3] via-[#4CA1AF] to-[#D1D9E6] text-white p-4 shadow-md w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          
          {/* ✅ Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png"  // Local logo file
              alt="UrbanEssence Logo" 
              className="w-12 h-12 rounded-full shadow-lg"
            />
            <span className="text-3xl font-bold tracking-wide text-gray-100">UrbanEssence</span>
          </Link>

          {/* ✅ Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center text-white hover:text-gray-200 transition">
              <FiHome className="mr-1" /> Home
            </Link>
            <Link to="/about" className="flex items-center text-white hover:text-gray-200 transition">
              <FiUser className="mr-1" /> About Us
            </Link>

            {/* ✅ Cart */}
            <Link to="/cart" className="relative">
              <button className="flex items-center bg-white text-[#4CA1AF] px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                <FiShoppingCart className="mr-2" />
                My Bag
                <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                  {cart.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ✅ Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Navbar;
