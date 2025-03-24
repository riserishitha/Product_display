import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import About from "./components/About";
import BarcodeScanner from "./components/BarcodeScanner";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <ToastContainer position="top-right" autoClose={2000} />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartDrawer onClose={() => setCartOpen(false)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/barcode-scanner" element={<BarcodeScanner/>}/>
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;

