import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiUser, FiHome, FiSearch, FiCamera, FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productsData from "../data/products.json";
import QuickViewModal from "./QuickViewModal";

const Navbar = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setProducts(productsData);

    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    setIsLoggedIn(loggedInStatus);
    setUsername(currentUser ? currentUser.username : "");

    if (loggedInStatus && currentUser) {
      const userCart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`)) || [];
      setCart(userCart);
    } else {
      setCart([]);  
    }
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

  const handleCartClick = () => {
    if (!isLoggedIn) {
      toast.error("Please login or signup first!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      navigate("/cart");
    }
  };

  const handleLogout = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      let users = JSON.parse(localStorage.getItem("users")) || [];

      users = users.filter((user) => user.email !== currentUser.email);
      localStorage.setItem("users", JSON.stringify(users));

      localStorage.removeItem(`cart_${currentUser.email}`);
    }

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    setIsLoggedIn(false);
    setUsername("");

    setCart([]);

    toast.success("User logged out and cart cleared!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <nav className="bg-white text-gray-800 py-2 shadow-md w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-8 max-w-7xl">

          <div className="flex items-center w-full md:w-1/2 space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Mynova Logo" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain"  
              />
            </Link>

            <div className="relative w-full">
              <div className="flex items-center px-4 py-2 rounded-full border border-gray-400 shadow-sm transition-all duration-300 hover:border-gray-600 w-full">
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
          </div>

          <div className="flex items-center space-x-4 mt-2 md:mt-0">

            <Link to="/" className="flex items-center text-sm hover:text-[#FF3E6C] transition">
              <FiHome className="mr-1" /> Home
            </Link>

            <Link to="/about" className="flex items-center text-sm hover:text-[#FF3E6C] transition">
              <FiUser className="mr-1" /> About Us
            </Link>

            <button
              onClick={() => toast.info("Scanner not available!")}
              className="flex items-center border-2 border-blue-500 text-blue-500 px-3 py-1 rounded-full shadow-md hover:border-blue-700 hover:text-blue-700 transition text-sm"
            >
              <FiCamera className="mr-1" />
              Scan
            </button>

            <button
              onClick={handleCartClick}
              className="relative flex items-center border-2 border-[#FF3E6C] text-[#FF3E6C] px-3 py-1 rounded-full shadow-md hover:border-[#D32F5D] hover:text-[#D32F5D] transition text-sm"
            >
              <FiShoppingCart className="mr-1" />
              Bag
            </button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm font-semibold">{username}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center border-2 border-red-500 text-red-500 px-3 py-1 rounded-full shadow-md hover:border-red-700 hover:text-red-700 transition text-sm"
                >
                  <FiLogOut className="mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center text-sm hover:text-[#FF3E6C] transition">
                <FiUser className="mr-1" /> Signup/login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="h-[65px]"></div>

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
