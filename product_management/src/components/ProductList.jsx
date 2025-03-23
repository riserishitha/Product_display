import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";
import QuickViewModal from "./QuickViewModal";
import { FiShoppingCart, FiEye } from "react-icons/fi";

const ProductList = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white min-h-screen p-10">  
      
      {/* ✅ Main Banner with Space Below */}
      <div className="max-w-6xl mx-auto mt-6">
        <img 
          src="/main pic.webp"  // Local banner image
          alt="UrbanEssence Banner" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* ✅ Added Space Below the Banner */}
      <div className="h-20"></div>

      <div className="container mx-auto">

        {/* ✅ Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              {/* ✅ Product Image */}
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition duration-300 group-hover:opacity-90"
                />
                <span className="absolute top-2 left-2 bg-[#4CA1AF] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Limited
                </span>

                {/* ✅ Quick View Button */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleQuickView(product)}
                    className="text-white bg-[#4CA1AF] px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg hover:bg-[#2B7A78]"
                  >
                    🔍 Quick View
                  </button>
                </div>
              </div>

              {/* ✅ Product Details */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-500">{product.brand}</p>
                <p className="text-[#4CA1AF] font-bold mt-2">₹{product.price}</p>

                {/* ✅ Buttons */}
                <div className="flex justify-between items-center mt-4">
                  
                  {/* View Button */}
                  <Link
                    onClick={() => handleQuickView(product)}
                    className="border border-[#4CA1AF] text-[#4CA1AF] px-4 py-2 rounded-full hover:bg-[#4CA1AF] hover:text-white transition duration-300 shadow-md flex items-center"
                  >
                    <FiEye className="mr-2" /> View
                  </Link>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#4CA1AF] text-white px-4 py-2 rounded-full hover:bg-[#2B7A78] transition duration-300 shadow-md flex items-center"
                  >
                    <FiShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProductList;
