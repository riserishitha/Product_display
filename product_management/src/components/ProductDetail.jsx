import React from "react";
import { useCart } from "../context/CartContext";

const ProductDetail = ({ product, onClose }) => {
  const { addToCart } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p>{product.description}</p>
        <p className="text-gray-600">Price: ${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 mt-4"
        >
          Add to Bag
        </button>
        <button onClick={onClose} className="text-red-500 ml-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
