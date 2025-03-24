import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiUser, FiHome, FiSearch, FiCamera } from "react-icons/fi";
import productsData from "../data/products.json";
import QuickViewModal from "./QuickViewModal";  

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const goToScanner = () => {
    navigate("/barcode-scanner");
  };

  return (
    <>
      <nav className="bg-white text-gray-800 py-2 shadow-md w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Mynova Logo" 
              className="w-16 h-16 object-contain"  
            />
          </Link>

          <div className="relative w-1/2">
            <div 
              className="flex items-center px-4 py-2 rounded-full border border-gray-400 shadow-sm transition-all duration-300 hover:border-gray-600"
            >
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>

            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute bg-white border shadow-md w-full mt-1 max-h-60 overflow-y-auto rounded-md z-10">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => openProductDetails(product)}
                    className="p-3 hover:bg-gray-100 cursor-pointer transition"
                  >
                    <strong>{product.name}</strong> - {product.brand}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">

            <Link to="/" className="flex items-center text-sm hover:text-[#FF3E6C] transition">
              <FiHome className="mr-1" /> Home
            </Link>

            <Link to="/about" className="flex items-center text-sm hover:text-[#FF3E6C] transition">
              <FiUser className="mr-1" /> About Us
            </Link>

            <button
              onClick={goToScanner}
              className="flex items-center border-2 border-blue-500 text-blue-500 px-3 py-1 rounded-full shadow-md hover:border-blue-700 hover:text-blue-700 transition text-sm"
            >
              <FiCamera className="mr-1" />
              Scan
            </button>

            <Link to="/cart" className="relative">
              <button 
                className="flex items-center border-2 border-[#FF3E6C] text-[#FF3E6C] px-3 py-1 rounded-full shadow-md hover:border-[#D32F5D] hover:text-[#D32F5D] transition text-sm"
              >
                <FiShoppingCart className="mr-1" />
                Bag
                <span className="ml-2 bg-black text-white rounded-full px-2 py-0.5 text-xs">
                  {cart.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="h-[55px]"></div> 

      {selectedProduct && (
        <QuickViewModal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </>
  );
};

export default Navbar;
