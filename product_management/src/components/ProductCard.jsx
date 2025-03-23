import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";   // ✅ Import Toast
import ProductDetail from "./ProductDetail";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showDetail, setShowDetail] = useState(false);

  // ✅ Function to handle add to cart with popup
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to bag!`, { autoClose: 2000 });  // ✅ Show popup
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>

        <button
          onClick={() => setShowDetail(true)}
          className="text-blue-500 mt-2"
        >
          View Details
        </button>

        <button
          onClick={handleAddToCart}   
          className="block w-full bg-green-500 text-white py-2 mt-2"
        >
          Add to Bag
        </button>
      </div>

      {showDetail && (
        <ProductDetail product={product} onClose={() => setShowDetail(false)} />
      )}
    </div>
  );
};

export default ProductCard;
