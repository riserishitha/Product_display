import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import About from "./components/About";
import BarcodeScanner from "./components/BarcodeScanner";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <ToastContainer position="top-right" autoClose={2000} />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartDrawer onClose={() => setCartOpen(false)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/barcode-scanner" element={<BarcodeScanner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
