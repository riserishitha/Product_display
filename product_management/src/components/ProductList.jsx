import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";
import QuickViewModal from "./QuickViewModal";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductList = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to bag!`, {
      position: "top-right",
      autoClose: 2000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="bg-white min-h-screen p-10" style={{ fontFamily: "'Outfit', sans-serif" }}>

      <div className="max-w-6xl mx-auto mt-6">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2000}
          transitionTime={1000}
        >
          <div>
            <img 
              src="/main pic.png" 
              alt="Main Pic" 
              className="w-full h-[500px] object-contain rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img 
              src="/image1.png" 
              alt="Image 1" 
              className="w-full h-[500px] object-contain rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img 
              src="/image2.png" 
              alt="Image 2" 
              className="w-full h-[500px] object-contain rounded-lg shadow-lg"
            />
          </div>
        </Carousel>
      </div>

      <div className="h-5"></div>

      <div className="container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition duration-300 hover:opacity-90"
                />
                <span className="absolute top-2 left-2 bg-[#FF3E6C] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Limited
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <button
                    onClick={() => handleQuickView(product)}
                    className="text-white bg-[#FF3E6C] px-5 py-2 rounded-full transition duration-300 shadow-lg hover:bg-[#D32F5D]"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-500">{product.brand}</p>
                <p className="text-[#FF3E6C] font-bold mt-2">${product.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#FF3E6C] text-white px-4 py-2 rounded-full hover:bg-[#D32F5D] transition duration-300 shadow-md flex items-center"
                  >
                    <FiShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={closeModal}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default ProductList;
